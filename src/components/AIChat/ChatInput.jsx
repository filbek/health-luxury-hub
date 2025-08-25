import React, { useState } from 'react';

/**
 * ChatInput component for user to type and send messages
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onSendMessage - Function to call when a message is sent
 * @param {boolean} props.isLoading - Whether the AI is currently processing a response
 * @returns {JSX.Element} - The rendered component
 */
const ChatInput = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center border border-neutral rounded-full bg-white overflow-hidden shadow-md">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about treatments, recovery, or Istanbul..."
          disabled={isLoading}
          className="flex-grow px-4 py-3 focus:outline-none text-neutral-darkest"
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={`px-4 py-3 text-white rounded-r-full transition-colors ${
            !message.trim() || isLoading
              ? 'bg-neutral-dark cursor-not-allowed'
              : 'bg-primary hover:bg-primary-dark'
          }`}
        >
          <i className="bi bi-send"></i>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
