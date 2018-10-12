import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import { openChannelModal } from '../../actions/ui_actions';

class ChannelList extends React.Component {
  //general is the first channel, otherwise sorted alphabetically
  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <div className="channel-sidebar">

        <div className="channels-header">
          <div className="channels-title"><h2>Channels</h2></div>
          <button
            className="create-channel-button"
            onClick={this.props.openChannelModal}
            >&oplus;</button>
        </div>

        <div className="channel-ul">
          <ul>
            {this.props.channels.map((channel) => <ChannelListItem key={channel.id} channel={channel} selectedChannel={this.props.selectedChannel}/>)}
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({entities: {channels}}) => {
  return {
    channels: Object.values(channels)
  }
}

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    openChannelModal: () => dispatch(openChannelModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
