import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SendMessageForm extends Component {
  state ={
	message: '',  
  };

  updateMessage = (e) => this.setState({message: e.target.value});

  isDisabled = () => this.state.message === '';

  sendMessage = (e, msg) => {
    const {sendMessage} = this.props;
    e.preventDefault();
  	sendMessage(msg);
    this.setState({message: ''});
  }

  render() {
    const {message} = this.state;
	return (
		<div>
			<form className="input-group">
				<input 
      				type="text" 
      				value={message} 
					className="form-control" 
					placeholder="Enter your message..." 
					onChange={(e) => this.updateMessage(e)} />
				<div className="input-group-append">
					<button className="btn submit-button" disabled={this.isDisabled()} onClick={(e) => this.sendMessage(e, message)}>
						SEND
					</button>
				</div>
			</form>
		</div>
	);
  }
}

SendMessageForm.propTypes = {
	sendMessage: PropTypes.func.isRequired,
};

export default SendMessageForm;