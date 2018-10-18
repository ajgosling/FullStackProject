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
    let body;

    //image
    if (message.body.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      body = <img src={message.body} className="message-image"/>

    //gif
    } else if (message.body.includes('giphy')) {
      body = <iframe src={message.body} className="message-gif" width="420" height="280" frameBorder="0" ></iframe>;

    //message
    } else {
      body = message.body;
    }
    return(
      <li className="message-index-item">
        <div className="test-div">
          <div className="image-holder">
            <img className="message-profile-image" src={user.imageUrl}/>
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
              {body}
            </div>

          </div>


        </div>



      </li>
    )
  }
}

export default MessageIndexItem;
