import React, { Component } from 'react';
import { Card, ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class Chatbot
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userInput: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            userInput: event.target.value,
        });
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState(prevState => ({
                messages: [...prevState.messages, {
                    text: this.state.userInput,
                    user: 'user'
                }],
                userInput: ''
            }), () => {
                this.botReply();
            });
        }
    };

    botReply = () => {
        let userMessage = this.state.messages[this.state.messages.length - 1].text;
        let botMessage = { text: `You said: ${userMessage}`, user: 'bot' };

        setTimeout(() => {
            this.setState(prevState => ({
                messages: [...prevState.messages, botMessage]
            }));
        }, 1000);
    };

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Chat with AI-chan!</Card.Title>
                    <ListGroup variant="flush">
                        {this.state.messages.map((message, index) => (
                            <ListGroup.Item key={index}>
                                <b>{message.user}:</b> {message.text}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type your message..."
                            aria-label="User Input"
                            aria-describedby="basic-addon2"
                            value={this.state.userInput}
                            onChange={this.handleInputChange}
                            onKeyPress={this.handleKeyPress} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.handleKeyPress}>Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Body>
            </Card>
        );
    }
}
