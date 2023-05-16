// src/components/Chatbot.js

import React, { Component } from 'react';

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // To hold the chat messages
      userInput: '' // To hold the user's input
    };
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value, // Update the userInput state when the user types in the input box
    });
  }

  render() {
    return (
      <div>
        {/* Map through the messages in the state and display them */}
        {this.state.messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}

        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
// src/components/Chatbot.js

import React, { Component } from 'react';

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // To hold the chat messages
      userInput: '' // To hold the user's input
    };
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value, // Update the userInput state when the user types in the input box
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState(prevState => ({
        messages: [...prevState.messages, this.state.userInput], // Add the user's input to the messages array
        userInput: '' // Clear the userInput state
      }));
    }
  }

  render() {
    return (
      <div>
        {/* Map through the messages in the state and display them */}
        {this.state.messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}

        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}
// src/components/Chatbot.js

import React, { Component } from 'react';

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // To hold the chat messages
      userInput: '' // To hold the user's input
    };
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value, // Update the userInput state when the user types in the input box
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState(prevState => ({
        messages: [...prevState.messages, {
          text: this.state.userInput, // Add the user's input to the messages array
          user: 'user' // Specify the user as the sender
        }], 
        userInput: '' // Clear the userInput state
      }), () => {
        this.botReply();
      });
    }
  }

  botReply = () => {
    // Here we implement a simple bot reply that echoes the user's message
    let userMessage = this.state.messages[this.state.messages.length - 1].text;
    let botMessage = {text: `You said: ${userMessage}`, user: 'bot'};

    // Add a delay to simulate bot processing time
    setTimeout(() => {
        this.setState(prevState => ({
            messages: [...prevState.messages, botMessage] // Add the bot's message to the messages array
        }));
    }, 1000);
} 
render() {
    return (
      <div>
        {/* Map through the messages in the state and display them */}
        {this.state.messages.map((message, index) => (
          <p key={index}>
            <b>{message.user}:</b> {message.text}
          </p>
        ))}

        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}
  export default Chatbot; 
