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
      title: 'direct',
      description: '',
      private: this.props.private,
      is_direct: true,
      creator_id: this.props.currentUser,
      ids: [this.props.currentUser],
      searchInput: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  changeSearch() {
    return e => this.setState({
      searchInput: e.currentTarget.value
    });
  }


  handleSubmit() {
    this.props.createChannel(this.state)
      .then((res) => this.props.history.push(`/channels/${res.payload.channel.id}`))
      .then(() => this.props.closeDirectModal())

  }
  handleClose() {
    this.setState({
      title: 'direct',
      description: '',
      searchInput: '',
      ids: [this.props.currentUser]
    })
    this.props.closeDirectModal()
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

  toggleUserInclude(id) {
    const idx = this.state.ids.indexOf(id)
    if (idx === -1) {
      //need to add item to array
      this.setState({
        ids: this.state.ids.concat([id])
      })
    } else {
      //need to remove item
      this.setState({
        ids: this.state.ids.filter((_, i) => i !== idx)
      });
    }
  }

  render() {


    if (this.props.directFormOpen) {
      const searchedUsers = Object.values(this.props.users).filter((user) => (
        user.username.includes(this.state.searchInput)
      ))

      const users = searchedUsers.map((user) => {
        if (user.id !== this.props.currentUser) {
          return (
            <li
              key={user.id}
              className="search-user-item"
              onClick={() => this.toggleUserInclude(user.id)}>
              <img src={this.props.users[user.id].imageUrl} className="user-list-picture"/>

              {user.username}
            </li>
          )
        }

      })

      const selectedUsers = this.state.ids.map((id) => {
        const user = this.props.users[id]
        if (id !== this.props.currentUser) {
          return (
            <div
              key={id}
              className="selected-user-item"
              onClick={() => this.toggleUserInclude(user.id)}
              >
              {user.username}
              <i className="fas fa-times"></i>


            </div>
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

                onChange={this.changeSearch()}
                value={this.state.searchInput}
                placeholder="search users"
                />
              <button
                onClick={this.handleSubmit}
                className="submit-button">
                Go
              </button>
            </div>
            <div className= "selected-user-list">
              {selectedUsers}
            </div>
            <div>
              <ul className="search-user-results">
                {users}
              </ul>
            </div>
          </div>
          <div
            className="channel-form-cancel"
            onClick={this.handleClose}>
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
