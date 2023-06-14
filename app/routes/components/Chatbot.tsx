import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: string }>>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Virtual Shopping Assistant</h1>
      <div className="chat-container">
        <div className="chat-messages bg-light p-3 rounded">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'user' ? 'text-end' : ''}`}>
              <span className={`badge bg-${message.sender === 'user' ? 'primary' : 'secondary'} p-2 rounded-pill`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message here..."
            value={input}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
