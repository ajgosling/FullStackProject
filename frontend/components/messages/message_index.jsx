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

  generateDate(date) {
    let time;
    const today = new Date;
    let yesterday = new Date;
    yesterday.setDate(today.getDate() - 1);
    
    if (today.getMonth() === date.getMonth()
      && today.getDate() === date.getDate()
      && today.getYear() === date.getYear()) {
      time = "Today";
    } else if (yesterday.getMonth() === date.getMonth()
      && yesterday.getDate() === date.getDate()
      && yesterday.getYear() === date.getYear()) {
      time = "Yesterday";
    } else {
      const thisMonth = "January February March April May June July August September October November December".split(' ')[date.getMonth()];
      const thisDay = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')[date.getDay()];
      time = `${thisDay}, ${thisMonth} ${date.getDate()}`;
    }
    return time;
    
  }
  renderMessages() {
    let messages = [];
    Object.values(this.props.messages).forEach((message) => {
      console.log(message.created);
      messages.push(<MessageIndexItem
        key={message.id}
        message={message}
        users={this.props.users}
        />)
      
      
      messages.push(<div
        className="message-date-divider">
        {message.created}

      </div>)

    })

    if (messages.length < 1) {
      messages = <div>No Messages Here</div>
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
    const messages = this.renderMessages();
    return (

      <ul className="message-index">
        {messages}
      </ul>
    )
  }
}


export default MessageIndex;
