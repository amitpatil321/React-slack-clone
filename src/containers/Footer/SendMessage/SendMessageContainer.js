/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import SendMessage from 'components/Footer/SendMessage';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Notification from 'components/Notification';
import { sendMessage } from 'utils/ChatKitUtil';
import { emojiIndex } from 'emoji-mart';
import * as CONFIG from 'config';

// TODO : Use refs instead of querySelector
class SendMessageContainer extends Component {
	state = {
	  message: '',
	  curserPositonStart: 0,
	  curserPositonEnd: 0,
	};

	componentDidMount() {
	  document.addEventListener(
	    'keydown',
	    this._handleCursorPosition.bind(this),
	    true,
	  );
	  document.addEventListener(
	    'click',
	    this._handleCursorPosition.bind(this),
	    true,
	  );
	}

	componentWillUnmount() {
	  document.removeEventListener(
	    'keydown',
	    this._handleCursorPosition.bind(this),
	    true,
	  );
	  document.removeEventListener(
	    'click',
	    this._handleCursorPosition.bind(this),
	    true,
	  );
	}


	_onChange = (event) => {
	  let message = event.target.value;
	  const filter = ['http', 'ttps'];
	  // check if text contains emoji codes ?
	  CONFIG.EMOJI_CODES.forEach((eachCode) => {
	    const pos = message.indexOf(eachCode);
	    if (pos !== -1) {
	      // Exception : http://, https:// and :/
	      // both contains ":/" so while typing urls it gets replaced with smiley
	      // So before replacing ":/" with smiley we have to check if its a url or individual text
	      if (!filter.includes(message.substring(pos, pos - 4))) {
	        const find = emojiIndex.search(eachCode).map(o => o.native);
	        if (find.length) message = message.replace(eachCode, find[0]);
	      }
	    }
	  });
	  this.setState({ message });
	};

	_onKeyDown = (event) => {
	  if (event.key === 'Enter') {
	    const { user, room } = this.props;
	    const { message } = this.state;
	    if (message && message.trim().length) {
	      this.setState({ message: '' });
	      // send message in room
	      sendMessage(
	        user,
	        room.id,
	        message,
	        () => {},
	        (err) => {
	          Notification(
	            'error',
	            'Error',
	            `Failed to send message, Please try again. ${err}`,
	          );
	        },
	      );
	    }
	    event.preventDefault();
	    event.stopPropagation();
	  }
	};

	_onEmojiSelected = (emoji) => {
	  const { curserPositonStart, curserPositonEnd } = this.state;
	  const string = document.querySelector('.slack-message').value;
	  const textareaStrParts = [
	    `${string.substring(0, curserPositonStart)}`,
	    `${emoji.native}`,
	    `${string.substring(curserPositonEnd, this.length)}`,
	  ];
	  this.setState({ message: textareaStrParts.join('') });
	};

	_handleCursorPosition(e) {
	  if (e.target.classList.contains('slack-message')) {
	    this.setState({
	      curserPositonStart: e.target.selectionStart,
	      curserPositonEnd: e.target.selectionEnd,
	    });
	  }
	}

	render() {
	  const { user, room } = this.props;
	  const { message } = this.state;
	  return (
  <>
    <SendMessage
      user={user}
      room={room}
      message={message}
      onChange={this._onChange}
      onKeyDown={this._onKeyDown}
      onEmojiSelected={this._onEmojiSelected}
    />
  </>
	  );
	}
}

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
});

SendMessage.propTypes = {
  user: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(SendMessageContainer);
