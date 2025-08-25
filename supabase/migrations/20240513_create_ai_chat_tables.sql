-- Create schema for AI chat functionality
CREATE SCHEMA IF NOT EXISTS ai;

-- Enable Row Level Security
ALTER SCHEMA ai OWNER TO postgres;

-- Create chat_sessions table
CREATE TABLE IF NOT EXISTS ai.chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'New Chat',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::JSONB
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS ai.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES ai.chat_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::JSONB
);

-- Create user_preferences table
CREATE TABLE IF NOT EXISTS ai.user_preferences (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  language TEXT DEFAULT 'en',
  theme TEXT DEFAULT 'light',
  notification_enabled BOOLEAN DEFAULT TRUE,
  preferences JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE ai.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai.user_preferences ENABLE ROW LEVEL SECURITY;

-- Chat sessions policies
CREATE POLICY "Users can view their own chat sessions"
  ON ai.chat_sessions
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own chat sessions"
  ON ai.chat_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own chat sessions"
  ON ai.chat_sessions
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own chat sessions"
  ON ai.chat_sessions
  FOR DELETE
  USING (auth.uid() = user_id);

-- Chat messages policies
CREATE POLICY "Users can view messages from their sessions"
  ON ai.chat_messages
  FOR SELECT
  USING (
    session_id IN (
      SELECT id FROM ai.chat_sessions WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert messages to their sessions"
  ON ai.chat_messages
  FOR INSERT
  WITH CHECK (
    session_id IN (
      SELECT id FROM ai.chat_sessions WHERE user_id = auth.uid()
    )
  );

-- User preferences policies
CREATE POLICY "Users can view their own preferences"
  ON ai.user_preferences
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own preferences"
  ON ai.user_preferences
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences"
  ON ai.user_preferences
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chat_sessions_user_id ON ai.chat_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON ai.chat_messages(session_id);

-- Create functions for managing chat data
CREATE OR REPLACE FUNCTION ai.create_chat_session(
  p_user_id UUID,
  p_title TEXT DEFAULT 'New Chat'
) RETURNS UUID AS $$
DECLARE
  v_session_id UUID;
BEGIN
  INSERT INTO ai.chat_sessions (user_id, title)
  VALUES (p_user_id, p_title)
  RETURNING id INTO v_session_id;
  
  RETURN v_session_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to add a message to a chat session
CREATE OR REPLACE FUNCTION ai.add_chat_message(
  p_session_id UUID,
  p_role TEXT,
  p_content TEXT
) RETURNS UUID AS $$
DECLARE
  v_message_id UUID;
  v_user_id UUID;
BEGIN
  -- Check if the session belongs to the current user
  SELECT user_id INTO v_user_id
  FROM ai.chat_sessions
  WHERE id = p_session_id;
  
  IF v_user_id != auth.uid() THEN
    RAISE EXCEPTION 'Not authorized to add messages to this chat session';
  END IF;
  
  -- Insert the message
  INSERT INTO ai.chat_messages (session_id, role, content)
  VALUES (p_session_id, p_role, p_content)
  RETURNING id INTO v_message_id;
  
  -- Update the session's updated_at timestamp
  UPDATE ai.chat_sessions
  SET updated_at = NOW()
  WHERE id = p_session_id;
  
  RETURN v_message_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
