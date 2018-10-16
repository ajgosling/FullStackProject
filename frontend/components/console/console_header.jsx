import React from 'react';
import { connect } from 'react-redux';
import { openChannelInfoModal, closeChannelInfoModal } from '../../actions/ui_actions';

const mapStateToProps = ( {ui} ) => ({
  channelInfoOpen: ui.channelInfoOpen
})

const mapDispatchToProps = dispatch => ({
    openChannelInfoModal: () => dispatch(openChannelInfoModal()),
    closeChannelInfoModal: () => dispatch(closeChannelInfoModal())

});

class ConsoleHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo(open) {
    if (open) {
      this.props.closeChannelInfoModal();
    } else {
      this.props.openChannelInfoModal();
    }
  }

  render() {
    if (!this.props.channel.members) {
      return null;
    }

    return (
      <div className="chat-header">

        <div className="chat-header-title">
          <div className="chat-header-left">
            <div className="chat-header-title">
              {this.props.channel.title}
            </div>

            <div className="chat-header-left-people">
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
