import React from 'react';
import { Link }  from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div
      className="channel-li"
      id={(this.props.selectedChannel == this.props.channel.id) ? "selected-channel" : ""}>

        <li>
          <Link to={`/channels/${this.props.channel.id}`}>
            <button>
              <div className="channel-symbol">#</div>
              <p className="channel-title">{this.props.channel.title}</p>

            </button>
          </Link>
        </li>
      </div>
    );
  }

}

export default ChannelListItem;
