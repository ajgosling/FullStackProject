import React, { Component } from 'react';
import ConsoleHeader from './console_header';
import ChannelInfoContainer from './channel_info_container';
import MessageIndex from '../messages/message_index';
import MessageForm from './message_form';

const ConsoleContainer = (props) => {

  return (
    <div className="console-container">
      <ConsoleHeader channel={props.channel}/>
      <div className="console-body">
        <div className="console-chat">
          <MessageIndex
            currentUser={props.currentUser}
            users={props.users}
            channel={props.channel}
            messages={props.messages}
            selectedChannel={props.selectedChannel}
            />
          <MessageForm
            currentUser={props.currentUser}
            channel={props.channel}
            createSubscription={props.createSubscription}
            />

        </div>
        <ChannelInfoContainer
          currentUser={props.currentUser}
          users={props.users}
          channel={props.channel}
          />

      </div>

    </div>
  )

}

export default ConsoleContainer;
