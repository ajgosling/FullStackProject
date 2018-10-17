import React from 'react';
import { Link }  from 'react-router-dom';

class DirectMessageItem extends React.Component {

  render() {
    let symbol;
    if (this.props.channel.members.length > 2) {
      symbol = <div className="dm-dot">{this.props.channel.members.length - 1}</div>;
    } else {
      symbol = <img className='online-dot' src={window.images.online} />
    }
    const users = [];
    this.props.channel.members.forEach((idx) => {
      if (idx !== this.props.currentUser) {
        users.push(this.props.users[idx].username);
      }
    })
    const title = users.join(", ")
    // const titleArray = users.map((idx) => (
    //   this.props.users[idx].username
    // ));
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
              <p className="channel-title">{title}</p>

            </button>
          </Link>
        </li>
      </div>
    );
  }
}

export default DirectMessageItem;
