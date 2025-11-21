// src/components/ChatWidget.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../components/style/ChatWidget.css'; // Ensure this is the correct path

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);

  // Use useCallback to ensure the function reference is stable
  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    // ... (rest of script initialization)
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    const triggerInput = () => {
      if (inputRef.current) {
        // Triggers the chat input focus when the bubble is clicked
        inputRef.current.click();
      }
    };

    const chatButton = document.querySelector('.chat-bubble');

    // FIX: Create a stable handler function to be used for adding/removing the listener
    const handleChatButtonClick = () => {
      toggleChat();
      triggerInput();
    };

    if (chatButton) {
      // Use the stable function reference here
      chatButton.addEventListener('click', handleChatButtonClick);
    }

    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target) && chatButton && !chatButton.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.body.removeChild(script);
        if (chatButton) {
            // FIX: Use the exact same stable reference to remove the listener
            chatButton.removeEventListener('click', handleChatButtonClick);
        }
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleChat]); 

  return (
    <div className="chat-widget-container">
      {/* Revert button text to 'AI Chat' for a cleaner look */}
      <div className="chat-bubble">
        AI Chat
      </div>

      {isOpen && (
        <div className="chat-window" ref={chatWindowRef}>
          <gen-search-widget
            configId="64e54ea6-0482-4f95-b14d-8d268cd8e835"
            location="us"
            triggerId="searchWidgetTrigger">
          </gen-search-widget>

          <input placeholder="Search here" id="searchWidgetTrigger" ref={inputRef} />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;