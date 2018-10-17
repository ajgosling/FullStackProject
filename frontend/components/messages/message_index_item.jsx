import React from 'react';

class MessageIndexItem extends React.Component {
  formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  render() {
    const message = this.props.message;
    const user = this.props.users[message.userId];
    const messageTime = this.formatTime(new Date(message.created));

    return(
      <li className="message-index-item">
        <div className="test-div">
          <div className="image-holder">
            <img className="message-profile-image" src={window.images.prof}/>
          </div>
          <div className="message-content">
            <div className="message-header">
              <span className="message-username">
                {user.username}
              </span>
              <span className="message-time">
                {messageTime}
              </span>


            </div>
            <div className="message-body">
              {message.body}
            </div>

          </div>


        </div>



      </li>
    )
  }
}

export default MessageIndexItem;
