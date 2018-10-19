import React from 'react';
import { connect } from 'react-redux';
import {
  openChannelInfoModal,
  closeChannelInfoModal,
  openChannelUsers
 } from '../../actions/ui_actions';

 import {
   deleteSubscription
 } from '../../actions/channel_actions';

const mapStateToProps = ( state ) => ({
  channelInfoOpen: state.ui.channelInfoOpen,
  channelUsersOpen: state.ui.channelUsersOpen,
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    openChannelInfoModal: () => dispatch(openChannelInfoModal()),
    closeChannelInfoModal: () => dispatch(closeChannelInfoModal()),
    openChannelUsers: () => dispatch(openChannelUsers()),
    deleteSubscription: (id) => dispatch(deleteSubscription(id))

});

class ConsoleHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.openUsersInfo = this.openUsersInfo.bind(this);
    this.state = {
      darkMode: false
    }
  }

  toggleInfo(open) {
    if (open) {
      this.props.closeChannelInfoModal();
    } else {
      this.props.openChannelInfoModal();
    }
  }

  openUsersInfo() {
    if (this.props.channelInfoOpen && this.props.channelUsersOpen) {
    } else if (this.props.channelInfoOpen) {
      this.props.openChannelUsers();
    } else if (this.props.channelUsersOpen){
      this.props.openChannelInfoModal();
    } else {
      this.props.openChannelInfoModal()
      setTimeout(this.props.openChannelUsers, 500)
    }
  }

  toggleDarkMode() {
    if (this.state.darkMode) {
      this.setState({
        darkMode: false
      })
    } else {
      this.setState({
        darkMode: true
      })
    }

  }
  render() {
    // if (!this.props.channel.members) {
    //   return null;
    // }
    let dark;
    if (this.state.darkMode) {
      dark = <div className="darkness">
        <img src={window.images.batman} />

      </div>
    } else {
      dark = null;
    }

    let leaveChannel;
    if (this.props.channel.members.includes(this.props.currentUser)) {
      leaveChannel = <button
        className="leave-channel-button"
        onClick={() => this.props.deleteSubscription(this.props.channel.id)}
        >
        Leave Channel

      </button>
    } else {
      leaveChannel = null;
    }
    return (

      <div className="chat-header">
        {dark}
        <div className="chat-header-title">
          <div className="chat-header-left">
            <div className="chat-header-title">
              {this.props.channel.title}
            </div>

            <div
              className="chat-header-left-people"
              onClick={this.openUsersInfo}
              >
              <img className='duck' src={window.images.duck} />
              {this.props.channel.members.length}
            </div>


          </div>
        </div>

        <div className="chat-header-right">
          <button
            onClick={() => this.toggleInfo(this.props.channelInfoOpen)}>

            <i className="fas fa-info-circle"></i>
          </button>
          <button
            onClick={this.toggleDarkMode}
            className={this.state.darkMode ? "light-mode-button" : "dark-mode-button"}>
            {this.state.darkMode ? "Woah, too dark" : "Dark Mode?"}
          </button>

          {leaveChannel}


        </div>
      </div>

    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsoleHeader);
