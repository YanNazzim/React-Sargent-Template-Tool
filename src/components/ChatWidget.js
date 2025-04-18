import React, { useState, useEffect, useRef } from 'react';
import '../components/style/ChatWidget.css';
import './style/ChatWidgetCustom.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);
  const inputRef = useRef(null); // Ref for the hidden input

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    // Function to trigger the hidden input
    const triggerInput = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };


    // Open chat and trigger input on button click
    const chatButton = document.querySelector('.chat-bubble');
    if (chatButton) {
      chatButton.addEventListener('click', () => {
        toggleChat();
        triggerInput();
      });
    }


    // Handle clicks outside the chat window to close it
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (chatButton) {
        chatButton.removeEventListener('click', () => {
          toggleChat();
          triggerInput();
        });
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line 
  }, [isOpen]); // Added toggleChat to the dependency array

  return (
    <div className="chat-widget-container">
      {/* Chat Bubble (Always Visible) */}
      <div className="chat-bubble">
        AI Powered Search
      </div>

      {/* Chat Window (Appears when the bubble is clicked) */}
      {isOpen && (
        <div className="chat-window custom-chat-window" ref={chatWindowRef}>
          {/* Your widget code here */}
          <gen-search-widget
            configId="64e54ea6-0482-4f95-b14d-8d268cd8e835"
            location="us"
            triggerId="searchWidgetTrigger"
          ></gen-search-widget>
          {/* Hidden input field */}
          <input
            id="searchWidgetTrigger"
            ref={inputRef}
            style={{ display: 'none' }}
            readOnly // Make it read-only
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;