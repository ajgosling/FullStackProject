import React from 'react';
import { connect } from 'react-redux';
import {
  openChannelInfoModal,
  closeChannelInfoModal,
  openChannelUsers
 } from '../../actions/ui_actions';

const mapStateToProps = ( {ui} ) => ({
  channelInfoOpen: ui.channelInfoOpen,
  channelUsersOpen: ui.channelUsersOpen
})

const mapDispatchToProps = dispatch => ({
    openChannelInfoModal: () => dispatch(openChannelInfoModal()),
    closeChannelInfoModal: () => dispatch(closeChannelInfoModal()),
    openChannelUsers: () => dispatch(openChannelUsers())

});

class ConsoleHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleInfo = this.toggleInfo.bind(this);
    this.openUsersInfo = this.openUsersInfo.bind(this);
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

  render() {
    // if (!this.props.channel.members) {
    //   return null;
    // }

    return (
      <div className="chat-header">

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
          <button>
            <i className="fas fa-cogs"></i>
          </button>


        </div>
      </div>

    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsoleHeader);
