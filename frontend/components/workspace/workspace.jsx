import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WorkspaceSidebar from './workspace_sidebar';
import ConsoleContainer from '../console/console_container';
import { logout } from '../../actions/session_actions';
import { fetchChannels, fetchChannel, createChannelSubscription } from '../../actions/channel_actions';
import { fetchChannelUsers } from '../../actions/user_actions';
import { fetchChannelMessages, receiveMessage } from '../../actions/message_actions';


class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false
    }
  }
  componentDidMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.fetchChannels(),
      this.props.fetchChannel(channelId),
      this.props.fetchChannelUsers(channelId),
      this.props.fetchChannelMessages(channelId),
      this.props.createChannelSubscription(channelId, this.props.receiveMessage)
    ]).then(() => this.setState({
      finished: true
    }))

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      const newChannelId = nextProps.match.params.channelId;

      this.props.fetchChannel(newChannelId)
      this.props.fetchChannelUsers(newChannelId)
      this.props.fetchChannelMessages(newChannelId)
      this.props.createChannelSubscription(newChannelId, nextProps.receiveMessage)
    }
  }

  render() {
    if (!this.state.finished) {
      return (
        null
      )
    }
    return (
      <div className="workspace">
        <WorkspaceSidebar
          currentUser={this.props.currentUser}
          channels={this.props.channels}
          selectedChannel={this.props.selectedChannel}
          logout={this.props.logout}/>
        <ConsoleContainer
          currentUser={this.props.currentUser}
          users={this.props.users}
          channel={this.props.channels[this.props.selectedChannel]}
          messages={this.props.messages}
          selectedChannel={this.props.selectedChannel}
          />
      </div>
    );
  }
}

const mapStateToProps = ({session, entities: {users, channels, messages}}, ownProps) => {
  return {
    currentUser: users[session.id],
    users: users,
    channels: channels,
    messages: messages,
    selectedChannel: ownProps.match.params.channelId

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: (id) => dispatch(fetchChannel(id)),
  fetchChannelUsers: (id) => dispatch(fetchChannelUsers(id)),
  logout: () => dispatch(logout()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  fetchChannelMessages: (id) => dispatch(fetchChannelMessages(id)),
  createChannelSubscription: (channelId, receiveMessage) => (dispatch(createChannelSubscription(channelId, receiveMessage)))
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace));
