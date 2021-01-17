import React from 'react';
import PropTypes from 'prop-types';

const ChatMessages = ({user, messages}) => {
	return(
		<ul className="message-list">
		{messages.map((message, index) => (
			<li
				key={index}
				className={message.username === user.username ? 'message sender' : 'message recipient'}>
				<p>{`${message.username}: ${message.text}`}</p>
			</li>
		))}
		</ul>
	);
}

ChatMessages.propTypes = {
	user: PropTypes.object.isRequired,
	messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatMessages;