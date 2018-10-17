import React from 'react';
import { Link }  from 'react-router-dom';

class DirectMessageItem extends React.Component {

  render() {
    console.log(this.props.channel.members.length);
    let symbol;
    if (this.props.channel.members.length > 2) {
      symbol = <div className="dm-dot">this.props.channel.members.length</div>;
    } else {
      symbol = <img className='online-dot' src={window.images.online} />
    }
    return (
      <div
      className="channel-li"
      id={(this.props.selectedChannel == this.props.channel.id) ? "selected-channel" : ""}>

        <li>
          <Link to={`/channels/${this.props.channel.id}`}>
            <button>
              <div className="channel-symbol">
                {symbol}
              </div>
              <p className="channel-title">{this.props.channel.title}</p>

            </button>
          </Link>
        </li>
      </div>
    );
  }
}

export default DirectMessageItem;
