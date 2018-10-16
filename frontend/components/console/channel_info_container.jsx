import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  closeChannelInfoModal,
  openChannelPurpose,
  closeChannelPurpose,
  openChannelUsers,
  closeChannelUsers,
} from '../../actions/ui_actions';

const mapStateToProps = ( state ) => ({
  channelInfoOpen: state.ui.channelInfoOpen,
  channelPurposeOpen: state.ui.channelPurposeOpen,
  channelUsersOpen: state.ui.channelUsersOpen,
  users: state.entities.users,
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    closeChannelInfoModal: () => dispatch(closeChannelInfoModal()),
    openChannelPurpose: () => dispatch(openChannelPurpose()),
    closeChannelPurpose: () => dispatch(closeChannelPurpose()),
    openChannelUsers: () => dispatch(openChannelUsers()),
    closeChannelUsers: () => dispatch(closeChannelUsers()),
});

class ChannelInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.togglePurpose = this.togglePurpose.bind(this);
    this.toggleUsers = this.toggleUsers.bind(this);
  }


  togglePurpose() {
    if (this.props.channelPurposeOpen) {
      this.props.closeChannelPurpose()
    } else {
      this.props.openChannelPurpose()
    }
  }

  toggleUsers() {
    if (this.props.channelUsersOpen) {
      this.props.closeChannelUsers()
    } else {
      this.props.openChannelUsers()
    }
  }
  render() {
    const modalCollapsed = this.props.channelInfoOpen? "" : "collapsed";
    const purposeCollapsed = this.props.channelPurposeOpen ? "" : "collapsed";
    const usersCollapsed = this.props.channelUsersOpen ? "" : "collapsed";
    const description = this.props.channel.description || "no description available";
    if (!this.props.users[this.props.currentUser]) {
      return null
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let createdDate = new Date(this.props.channel.created);
    let dateString = `${months[createdDate.getMonth()]} ${createdDate.getDate()}, ${createdDate.getFullYear()}`

    return (
      <div className={`channel-info-container ${modalCollapsed}`}>
        <div className="channel-info-title">
          <p>About #{this.props.channel.title}</p>
          <button onClick={this.props.closeChannelInfoModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="channel-description-open">
          <div
            className="channel-info-description"
            onClick={this.togglePurpose}>
            <div className="channel-info-description-left">
              <p><i className="fas fa-info-circle"></i></p>
              <p>Channel Details</p>
            </div>

            <p><i className={`fas fa-caret-down ${purposeCollapsed}`}></i></p>
          </div>
          <div className={`channel-description-content ${purposeCollapsed}`}>
            <h2>Purpose</h2>
            <p>{description}</p>
            <h2>Created</h2>
            <p>Created by {this.props.channel.creator} on {dateString}</p>

          </div>


        </div>
        <div className="channel-description-open">
          <div
            className="channel-info-description"
            onClick={this.toggleUsers}>
            <div className="channel-info-description-left">
              <p><img className='users-duck' src={window.images.duck} /></p>
              <p> Quackers</p>
            </div>

            <p><i className={`fas fa-caret-down ${usersCollapsed}`}></i></p>
          </div>
          <div className={`channel-description-content ${usersCollapsed}`}>

            <ul>
              {this.props.channel.members.map((userId) => (
                <li key={userId} className="user-list-element">
                  <img src={window.images.prof} className="user-list-picture"/>
                  {this.props.users[userId].username}
                </li>
              ))}
            </ul>

          </div>


        </div>



      </div>
    )
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelInfoContainer);
