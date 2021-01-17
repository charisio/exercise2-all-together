import React, {Component} from 'react';
import SendMessageForm from './SendMessageForm'; 
import ChatMessages from './ChatMessages';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
	sendMessageHandler = (msg) => {
      	const {user, sendMessage} = this.props;
      	sendMessage(user, msg);
    };

	render() {
      const {user, messages} = this.props;
      return(
		<div className="chat-window">
			<h2>Super Awesome Chat</h2>
			<div className="name sender">{user.username}</div>
				<ChatMessages user={user} messages={messages}/>
				<SendMessageForm sendMessage={this.sendMessageHandler}/>
			</div>
	  );
	}
}

ChatWindow.propTypes = {
	user: PropTypes.object.isRequired,
  	messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  	sendMessage: PropTypes.func.isRequired,
};

export default ChatWindow;