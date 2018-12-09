import React from 'react';
import ChannelList from '../channel/channel_list';
import ChannelForm from '../channel/channel_form';
import DirectMessageList from '../channel/direct_message_list';
import DirectMessageForm from '../channel/direct_message_form';

class WorkspaceSidebar extends React.Component {

  handleGithubClick() {
    console.log('here');
    // window.location.assign('https://github.com/ajgosling');
  }

  render() {
    const normalChannels = {};
    const directMessages = {};
    Object.values(this.props.channels).forEach((channel) => {
      if (channel.direct) {
        if (channel.members.includes(this.props.currentUser.id)) {
          directMessages[channel.id] = channel
        }
      } else {
        normalChannels[channel.id] = channel
      }
    })
    return <div className="workspace-sidebar">
        <div className="current-user-info">
          <div className="workspace-info">
            <h1 className="workspace-name">Rabbit-Season</h1>
            <div className="down-caret">v</div>
          </div>
          <div className="user-logout">
            <h2>
              <img className="online-dot" src={window.images.online} />
              {this.props.currentUser.username}
            </h2>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        </div>
        <div className="channels-and-messages">
          <ChannelList channels={normalChannels} selectedChannel={this.props.selectedChannel} />

          <DirectMessageList channels={directMessages} selectedChannel={this.props.selectedChannel} />
        </div>

        <ChannelForm />
        <DirectMessageForm />
        <div className="website-links">
          <i onClick={() => handleGithubClick} className="fab fa-github" />
          <i className="fab fa-github" />
          <i className="fab fa-github" />
        </div>
      </div>;
  }
}




export default WorkspaceSidebar;
