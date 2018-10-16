import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConsoleChat extends React.Component {

  render() {
    if (!this.props.messages) {
      return (
        <h1>NO MESSAGES YET!</h1>
      )
    }
    return (
      <ul className="chatbox">
        {Object.values(this.props.messages).map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>

    )
  }
}


export default ConsoleChat;


// App[this.props.currentChannel.id].speak(this.state)
//this.state is entire message object (userid, channelid)
