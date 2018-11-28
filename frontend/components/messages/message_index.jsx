import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessages = this.renderMessages.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentWillReceiveProps(nextProps) {
    this.scrollToBottom();
  }

  renderMessages() {
    let messages = [];
    Object.values(this.props.messages).forEach((message) => {
      console.log(message);
      messages.push(<MessageIndexItem
        key={message.id}
        message={message}
        users={this.props.users}
        />)

      messages.push(<div
        className="message-date-divider">
        

      </div>)

    })

    if (messages.length < 1) {
      messages = <div>No Messages Hither</div>
    }

    return messages;


  }
  scrollToBottom() {
    const messageIndex = document.querySelector('.message-index');
    messageIndex.scrollTop = messageIndex.scrollHeight;
    setTimeout(function () {
      const messageIndex = document.querySelector('.message-index');
      messageIndex.scrollTop = messageIndex.scrollHeight;
    }, 0);
  }
  render() {
    if (!this.props.messages) {
      return (
        <h1>NO MESSAGES YET!</h1>
      )
    }

    const messages = this.renderMessages();
    return (

      <ul className="message-index">
        {messages}
      </ul>
    )
  }
}


export default MessageIndex;
