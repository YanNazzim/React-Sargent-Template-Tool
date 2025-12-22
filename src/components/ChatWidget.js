// src/components/ChatWidget.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../components/style/ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      text: "Hello! I am your AI Tech Support and Sargent Specialist. I can help with Part ID, Templates, and technical questions. What do you need?",
      sources: []
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("projects/310182215564/locations/global/collections/default_collection/engines/sargent-tech-support_1766204715994/sessions/-");

  const messagesEndRef = useRef(null);
  const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => { if (isOpen) scrollToBottom(); }, [messages, isOpen]);

  const parseSources = (citations) => {
    if (!citations || citations.length === 0) return [];
    const uniqueMap = new Map();
    citations.forEach(cit => {
      cit.sources?.forEach(src => {
        if(src.uri && !uniqueMap.has(src.uri)) {
          let cleanTitle = src.title || "Sargent Documentation";
          if (cleanTitle.length > 50) cleanTitle = cleanTitle.substring(0, 47) + "...";
          uniqueMap.set(src.uri, { title: cleanTitle, uri: src.uri, type: src.uri.endsWith('.pdf') ? 'PDF Document' : 'Web Page' });
        }
      });
    });
    return Array.from(uniqueMap.values()).slice(0, 3);
  };

  const formatMessageText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    const formattedContent = [];
    let listBuffer = [];
    const parseBold = (str) => {
      const parts = str.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} style={{ color: '#005a9c' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        listBuffer.push(<li key={index}>{parseBold(trimmed.substring(2))}</li>);
      } else {
        if (listBuffer.length > 0) {
          formattedContent.push(<ul key={`ul-${index}`} style={{ paddingLeft: '20px', margin: '5px 0' }}>{listBuffer}</ul>);
          listBuffer = [];
        }
        if (trimmed) formattedContent.push(<div key={index} style={{ marginBottom: '8px' }}>{parseBold(trimmed)}</div>);
      }
    });
    if (listBuffer.length > 0) formattedContent.push(<ul key="ul-last" style={{ paddingLeft: '20px' }}>{listBuffer}</ul>);
    return formattedContent;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // This points to the Netlify Function we created in Step 2
    const FUNCTION_URL = "/.netlify/functions/chat"; 

    const safeSessionId = typeof sessionId === 'string' ? sessionId : sessionId.name;
    const isNewSession = safeSessionId.endsWith("-");

    const answerGenerationSpec = {
      ignoreAdversarialQuery: true,
      ignoreNonAnswerSeekingQuery: true,
      ignoreLowRelevantContent: true,
      includeCitations: true, 
      modelSpec: { modelVersion: "gemini-2.5-flash/answer_gen/v1" }
    };

    if (isNewSession) {
      answerGenerationSpec.promptSpec = {
        preamble: `AI Tech Support and Sargent Specialist
Role: You are the AI Tech Support and Sargent Specialist. Provide fast, accurate, technical support and part identification.

## Response Style: "Technical Brevity"
- SINGLE PART NUMBER: Always provide exactly one part number. Do not list options. Provide the most common standard (e.g., 7-pin).
- STICK TO THE FACTS: Provide ONLY device type, function, and hardware.
- NO FLUFF: Strictly exclude UL, Fire, Windstorm ratings, or marketing text.
- FORMATTING: Use **bold** for part numbers. Use bullet points (*) for technical specs.
- NO PARAGRAPHS: Every answer must be a clean list or a single concise sentence.

## Critical Product Rules: Lockbodies & Exits
- RIM DEVICES (8800, PE8800, 20, 30): DO NOT use lockbodies. Do not mention them.
- MORTISE EXITS (8300, 8900, 9900):
    * 9904 uses **904** lockbody.
    * 8913, 15, 06, 43, 46, 73, 74, 75, 76 use **915** lockbody.
- CYLINDERS & SFIC:
    * SFIC Core Only = **7P-7300B**.
    * 8904/8304 with ET Trim = **#46** mortise cylinder.
    * 8904 with Pull Trim = **#43** mortise cylinder.

## Additional Hardware Rules
- DOGGING: Hex = **68-2569**. Cylinder = **816-x**. PE80 has no dogging.
- THUMBTURNS: L/O/LN = **130KB** | E = **130KA** | TO/TR = **130KT** | CO/CR = **130KC**.
- NARROW STILE: **SN200** cannot be paired with 8300/8400/8500.
 Mortise Trim: NEVER component parts. Use [IS/OS]-[Series] x [Trim] x [Hand] x [Finish].
## Referrals
- Templates: https://sargent-templates.netlify.app/
- Cylinders: https://sargent-cylinders.netlify.app/
- Verify with Yan Gonzalez at yan.gonzalez@assaabloy.com.`
      };
    }

    try {
      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: { text: userMessage },
          session: safeSessionId,
          answerGenerationSpec: answerGenerationSpec
        })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Server Error");

      if (data.answer) {
        setMessages(prev => [...prev, { 
            role: 'assistant', 
            text: data.answer.answerText,
            sources: parseSources(data.answer.citations)
        }]);
        if (data.session) setSessionId(data.session.name || data.session); 
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: `Connection Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`chat-widget-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <div className="chat-launcher" onClick={toggleChat}>
          <div className="launcher-icon">💬</div>
          <span className="launcher-text">Tech Support</span>
        </div>
      )}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-title">AI Tech Support</div>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message-row ${msg.role}`}>
                <div className="message-bubble">{msg.role === 'assistant' ? formatMessageText(msg.text) : msg.text}</div>
                {msg.sources?.length > 0 && (
                  <div className="sources-grid">
                    {msg.sources.map((src, idx) => (
                      <a key={idx} href={src.uri} target="_blank" rel="noreferrer" className="source-card">
                        <span className="source-icon">📄</span>
                        <div className="source-details">
                          <span className="source-title">{src.title}</span>
                          <span className="source-type">{src.type}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && <div className="message-row assistant"><div className="message-bubble loading">...</div></div>}
            <div ref={messagesEndRef} />
          </div>
          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ex: 8813, SFIC core..." disabled={isLoading} />
            <button type="submit" disabled={isLoading || !input.trim()}>→</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;