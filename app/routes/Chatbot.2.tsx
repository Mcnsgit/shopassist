import React, { Component } from 'react';
import { Card, ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class Chatbot
    extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            messages: [],
            userInput: ''
        };
    }

    handleInputChange = (event: { target: { value: any; }; }) => {
        this.setState({
            userInput: event.target.value,
        });
    };

    handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            this.setState(prevState => ({
                messages: [<div className="prevState"></div> {
                    text: this.state
                    user: '
                }],
                userInput: ''
            }), () => {
                this.botReply();
            });
        }
    };

    // botReply = () => {
    //     let userMessage = this.state.[this.state.messages.length - 1].text;
    //     let botMessage = { text: `You said: ${userMessage}`, user: 'bot' };

    //     setTimeout(() => {
    //         this.setState(prevState => ({
    //             messages: <div className= "prevState" 
    //             let: true></div>
    //                     text: string;
    //                     user: string;
    //                 }></div>
    //         }));
    //     }, 1000);
    // };

    // render() {
    //     return (
    //         <Card style={{ width: '18rem' }}>
    //             <Card.Body>
    //                 <Card.Title>Chat with AI-chan!</Card.Title>
    //                 <ListGroup variant="flush">
    //                     {this.state.messages.map((message: { user: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
    //                         <ListGroup.Item key={index}>
    //                             <b>{message.user}:</b> {message.text}
    //                         </ListGroup.Item>
    //                     ))}
    //                 </ListGroup>
    //                 <InputGroup className="mb-3">
    //                     <FormControl
    //                         placeholder="Type your message..."
    //                         aria-label="User Input"
    //                         aria-describedby="basic-addon2"
    //                         value={this.state.userInput}
    //                         onChange={this.handleInputChange}
    //                         onKeyPress={this.handleKeyPress} />
    //                     <InputGroup.Append>
    //                         <Button variant="outline-secondary" onClick={this.handleKeyPress}>Send</Button>
    //                     </InputGroup.Append>
    //                 </InputGroup>
    //             </Card.Body>
    //         </Card>
    //     );
    // }
}
let botOutput = "Hello! What are you looking for today?";

function handleUserInput(userInput: string | string[]) {
if (userInput.includes("shirt")) {
    botOutput = "We have a variety of shirts. Would you like to see men's or women's shirts?";
} else if (userInput.includes("shoes")) {
    botOutput = "We have a range of shoes. Are you interested in athletic shoes or casual shoes?";
} else {
    botOutput = "Sorry, I didn't quite catch that. Could you please provide more details?";
}
}
import { NlpManager } from 'node-nlp';
const manager = new NlpManager({ languages: ['en'] });

async function trainNlpModel() {
manager.addDocument('en', 'I am looking for a red shirt', 'search.shirt');
manager.addDocument('en', 'Show me blue jeans', 'search.jeans');
  // Add more examples for each intent...

await manager.train();
}

async function processUserInput(userInput) {
await trainNlpModel();
const response = await manager.process('en', userInput);
const intent = response.intent;

  // Generate response based on identified intent...
}
