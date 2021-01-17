import React, { Component } from 'react';
import logo from './logo.svg';
import ChatWindow from './ChatWindow';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

//const users = [{ username: 'Amy' }, { username: 'John' }];

//const messages = [
//  { username: 'Amy', text: 'Hi, Jon!' },
//  { username: 'Amy', text: 'How are you?' },
//  { username: 'John', text: 'Hi, Amy! Good, you?' },
//];

class App extends Component {
  state = {
  	users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
          { username: 'Amy', text: 'Hi, Jon!' },
          { username: 'Amy', text: 'How are you?' },
          { username: 'John', text: 'Hi, Amy! Good, you?' },
        ],
  };

  sendMessageHandler = (user, msg) => {
      	this.setState((prevState) => ({
        	messages: [...prevState.messages, {username: user.username, text: msg}]
        }));
    };

  render() {
    const {users, messages} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
			{users && users.map((user, index) => (
            	<ChatWindow key={index} user={user} sendMessage={this.sendMessageHandler} messages={messages}/>
			))}
        </div>
      </div>
    );
  }
}

export default App;
