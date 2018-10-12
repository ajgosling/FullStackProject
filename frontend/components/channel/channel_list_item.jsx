import React from 'react';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="channel-li">
        <li>
          <button>
            <div className="channel-symbol">#</div>
            <div className="channel-title">{this.props.channel.title}</div>
          </button>
        </li>
      </div>
    );
  }

}

export default ChannelListItem;
