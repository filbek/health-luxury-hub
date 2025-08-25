import React from 'react';

/**
 * ChatMessage component displays a single message in the chat interface
 * 
 * @param {Object} props - Component props
 * @param {string} props.role - The role of the message sender (user or assistant)
 * @param {string} props.content - The content of the message
 * @param {boolean} props.isLoading - Whether the message is currently loading
 * @returns {JSX.Element} - The rendered component
 */
const ChatMessage = ({ role, content, isLoading = false }) => {
  const isUser = role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-primary text-white rounded-tr-none' 
            : 'bg-neutral-light text-neutral-darkest rounded-tl-none'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-neutral-dark rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-neutral-dark rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-neutral-dark rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{content}</div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
