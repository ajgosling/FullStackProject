import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { closeDirectModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
  errors: state.errors.channel,
  private: false,
  currentUser: state.session.id,
  directFormOpen: state.ui.directFormOpen,
  users: state.entities.users

});


const mapDispatchToProps = dispatch => ({
    createChannel: channel => dispatch( createChannel(channel)),
    closeDirectModal: () => dispatch(closeDirectModal())
});

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      private: this.props.private,
      creator_id: this.props.currentUser,
      userIds: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.toggleUserInclude = this.toggleUserInclude.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit() {
    this.props.createChannel(this.state)
      .then((res) => this.props.history.push(`/channels/${res.payload.channel.id}`))
      .then(() => this.props.closeChannelModal())
    this.setState({
      title: '',
      description: ''
    })
  }

  renderErrors() {
    return(
      <ul className="session-errors">
        {this.props.errors.map((err, idx) => (
          <li key={`err-${idx}`}>
            - {err}
          </li>
        ))}
      </ul>
    );
  }

  // toggleUserInclude(id) {
  //   const flag = this.state.userIds[id];
  //   if (flag) {
  //     // need to remove item from array
  //     this.setState({
  //       userIds.id: undefined
  //     })
  //   } else {
  //     this.setState({
  //       userIds.id: true
  //     })
  //   }
  // }

  render() {

    // console.log(this.state.userIds);
    // this.toggleUserInclude(1);
    // console.log(this.state.userIds);


    if (this.props.directFormOpen) {
      const users = Object.values(this.props.users).map((user) => {
        if (user.id !== this.props.creator_id) {
          return (
            <li
              key={user.id}
              className="search-user-item">
              <img src={window.images.prof} className="user-list-picture"/>

              {user.username}
            </li>
          )

        }
      })


      return (
        <div className="fullscreen">
          <div className="create-channel-form">
            <h2>New Direct Message</h2>
            <p>
              Waddle you do without people to chat with?
            </p>

            {this.renderErrors()}

            <div className="search-users-bar">
              <input
                type="text"

                onChange={this.update("title")}
                value={this.state.title}
                placeholder="search users"
                />
              <button
                onClick={this.handleSubmit}
                className="submit-button">
                Go
              </button>
            </div>
            <div>
              <ul className="search-user-results">
                {users}
              </ul>
            </div>
          </div>
          <div
            className="channel-form-cancel"
            onClick={this.props.closeDirectModal}>
            <i className="fa fa-times channel-form-icon"></i>
            <div className="form-esc">esc</div>
          </div>
        </div>
      )
    } else {
      return null;
    }


  }

}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm));
