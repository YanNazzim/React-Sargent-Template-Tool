// src/components/ChatWidget.js
import React, { useState, useEffect, useRef } from 'react';
import '../components/style/ChatWidget.css'; // Create a CSS file for styling

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    // Handle clicks outside the chat window to close it
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="chat-widget-container">
      {/* Chat Bubble (Always Visible) */}
      <div className="chat-bubble" onClick={toggleChat}>
        {/* You can add an icon or image here */}
        AI
      </div>

      {/* Chat Window (Appears when the bubble is clicked) */}
      {isOpen && (
        <div className="chat-window" ref={chatWindowRef}>
          {/* Your widget code here */}
          <gen-search-widget
            configId="64e54ea6-0482-4f95-b14d-8d268cd8e835"
            location="us"
            triggerId="searchWidgetTrigger"
          ></gen-search-widget>
          <input placeholder="Ask the AI a question" id="searchWidgetTrigger" />
          {/* Add any additional styling or elements as needed */}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;