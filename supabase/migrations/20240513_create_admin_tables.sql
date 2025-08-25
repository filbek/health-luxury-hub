-- Create schema for content management
CREATE SCHEMA IF NOT EXISTS admin;

-- Enable Row Level Security
ALTER SCHEMA admin OWNER TO postgres;

-- Create roles table
CREATE TABLE IF NOT EXISTS admin.roles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default roles
INSERT INTO admin.roles (name, description) VALUES
  ('super_admin', 'Full access to all features'),
  ('content_manager', 'Can manage content but not users or settings'),
  ('support', 'Can view and respond to user messages')
ON CONFLICT (name) DO NOTHING;

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id INTEGER REFERENCES admin.roles(id) ON DELETE RESTRICT,
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create treatments table
CREATE TABLE IF NOT EXISTS admin.treatments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  price DECIMAL(10, 2),
  duration TEXT,
  category TEXT NOT NULL,
  includes JSONB DEFAULT '[]'::JSONB,
  procedures JSONB DEFAULT '[]'::JSONB,
  faq JSONB DEFAULT '[]'::JSONB,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES admin.users(id),
  updated_by UUID REFERENCES admin.users(id)
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS admin.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  category_label TEXT NOT NULL,
  author_id UUID REFERENCES admin.users(id),
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS admin.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  treatment TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'responded', 'closed')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  assigned_to UUID REFERENCES admin.users(id)
);

-- Create settings table
CREATE TABLE IF NOT EXISTS admin.settings (
  id SERIAL PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by UUID REFERENCES admin.users(id)
);

-- Insert default settings
INSERT INTO admin.settings (key, value, description) VALUES
  ('site_info', '{"name": "Health Luxury Hub", "tagline": "Premium Medical Tourism in Istanbul", "contact_email": "info@healthluxuryhub.com", "contact_phone": "+90 500 000 0000"}', 'Basic site information'),
  ('social_media', '{"facebook": "", "instagram": "", "twitter": "", "youtube": ""}', 'Social media links'),
  ('seo', '{"meta_title": "Health Luxury Hub - Premium Medical Tourism in Istanbul", "meta_description": "Experience world-class medical treatments combined with luxury tourism experiences in Istanbul, Turkey."}', 'SEO settings')
ON CONFLICT (key) DO NOTHING;

-- Create activity_log table
CREATE TABLE IF NOT EXISTS admin.activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES admin.users(id),
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE admin.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin.treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin.activity_log ENABLE ROW LEVEL SECURITY;

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION admin.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  role_name TEXT;
BEGIN
  SELECT r.name INTO role_name
  FROM admin.users u
  JOIN admin.roles r ON u.role_id = r.id
  WHERE u.id = user_id;
  
  RETURN role_name IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user is super admin
CREATE OR REPLACE FUNCTION admin.is_super_admin(user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  role_name TEXT;
BEGIN
  SELECT r.name INTO role_name
  FROM admin.users u
  JOIN admin.roles r ON u.role_id = r.id
  WHERE u.id = user_id;
  
  RETURN role_name = 'super_admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create policies for admin.users
CREATE POLICY "Admins can view users"
  ON admin.users
  FOR SELECT
  USING (admin.is_admin(auth.uid()));

CREATE POLICY "Super admins can insert users"
  ON admin.users
  FOR INSERT
  WITH CHECK (admin.is_super_admin(auth.uid()));

CREATE POLICY "Super admins can update users"
  ON admin.users
  FOR UPDATE
  USING (admin.is_super_admin(auth.uid()));

-- Create policies for admin.treatments
CREATE POLICY "Admins can view treatments"
  ON admin.treatments
  FOR SELECT
  USING (admin.is_admin(auth.uid()));

CREATE POLICY "Admins can insert treatments"
  ON admin.treatments
  FOR INSERT
  WITH CHECK (admin.is_admin(auth.uid()));

CREATE POLICY "Admins can update treatments"
  ON admin.treatments
  FOR UPDATE
  USING (admin.is_admin(auth.uid()));

CREATE POLICY "Admins can delete treatments"
  ON admin.treatments
  FOR DELETE
  USING (admin.is_admin(auth.uid()));

-- Create policies for admin.blog_posts
CREATE POLICY "Admins can view blog posts"
  ON admin.blog_posts
  FOR SELECT
  USING (admin.is_admin(auth.uid()));

CREATE POLICY "Admins can insert blog posts"
  ON admin.blog_posts
  FOR INSERT
  WITH CHECK (admin.is_admin(auth.uid()));

CREATE POLICY "Admins can update blog posts"
  ON admin.blog_posts
  FOR UPDATE
  USING (admin.is_admin(auth.uid()));

CREATE POLICY "Admins can delete blog posts"
  ON admin.blog_posts
  FOR DELETE
  USING (admin.is_admin(auth.uid()));

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_treatments_slug ON admin.treatments(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON admin.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON admin.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_activity_log_user_id ON admin.activity_log(user_id);
