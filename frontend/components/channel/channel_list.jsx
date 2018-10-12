import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';

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
          <Link className="create-channel-button" to="/channels/new">&oplus;</Link>
        </div>

        <div className="channel-ul">
          <ul>
            {this.props.channels.map((channel) => <ChannelListItem key={channel.id} channel={channel}/>)}
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({entities: {channels}}) => ({
  channels: Object.values(channels)
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
