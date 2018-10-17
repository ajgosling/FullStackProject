import React from 'react';
import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import DirectMessageItem from './direct_message_item';
import { openChannelModal } from '../../actions/ui_actions';

class DirectMessageList extends React.Component {
  //general is the first channel, otherwise sorted alphabetically


  render() {
    return (
      <div className="channel-sidebar">
        <div className="channels-header">
          <div className="channels-title"><h2>Direct Messages</h2></div>
            <button
              className="create-channel-button"
              onClick={this.props.openChannelModal}
              >&oplus;</button>
        </div>

        <div className="channel-ul">
          <ul>
            {Object.values(this.props.channels).map((channel) => <DirectMessageItem key={channel.id} channel={channel} selectedChannel={this.props.selectedChannel}/>)}
          </ul>
        </div>
      </div>
    )
    // return (
    //   <div className="channel-sidebar">
    //
    //     <div className="channels-header">
    //       <div className="channels-title"><h2>Channels</h2></div>
    //       <button
    //         className="create-channel-button"
    //         onClick={this.props.openChannelModal}
    //         >&oplus;</button>
    //     </div>
    //
    //     <div className="channel-ul">
    //       <ul>
    //         {Object.values(this.props.channels).map((channel) => <ChannelListItem key={channel.id} channel={channel} selectedChannel={this.props.selectedChannel}/>)}
    //       </ul>
    //     </div>
    //
    //   </div>
    // );
  }
}



const mapDispatchToProps = dispatch => ({
    openChannelModal: () => dispatch(openChannelModal())
});

export default connect(
  null,
  mapDispatchToProps
)(DirectMessageList);
