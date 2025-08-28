// src/components/ChatWidget.js
import React, { useState, useEffect, useRef } from 'react';
import '../components/style/ChatWidget.css'; // Ensure this is the correct path

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    const triggerInput = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    const chatButton = document.querySelector('.chat-bubble');
    if (chatButton) {
      chatButton.addEventListener('click', () => {
        toggleChat();
        triggerInput();
      });
    }

    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target) && !chatButton.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.body.removeChild(script);
        if (chatButton) {
            chatButton.removeEventListener('click', toggleChat);
        }
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleChat]);

  return (
    <div className="chat-widget-container">
      <div className="chat-bubble">
        AI Powered Search
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