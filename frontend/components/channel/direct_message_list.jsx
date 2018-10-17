import React from 'react';
import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import DirectMessageItem from './direct_message_item';
import { openDirectModal } from '../../actions/ui_actions';

class DirectMessageList extends React.Component {
  //general is the first channel, otherwise sorted alphabetically

  render() {
    return (
      <div className="channel-sidebar">
        <div className="channels-header">
          <div className="channels-title"><h2>Direct Messages</h2></div>
            <button
              className="create-channel-button"
              onClick={this.props.openDirectModal}
              >&oplus;</button>
        </div>

        <div className="channel-ul">
          <ul>
            {Object.values(this.props.channels).map((channel) => (
              <DirectMessageItem
                key={channel.id}
                channel={channel}
                users={this.props.users}
                currentUser={this.props.currentUser}
                selectedChannel={this.props.selectedChannel}
                />))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.entities.users,
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    openDirectModal: () => dispatch(openDirectModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageList);
