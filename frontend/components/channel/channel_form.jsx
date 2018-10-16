import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { closeChannelModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
  errors: state.errors.channel,
  title: '',
  description: '',
  private: false,
  creator_id: state.session.id,
  channelFormOpen: state.ui.channelFormOpen
});


const mapDispatchToProps = dispatch => ({
    createChannel: channel => dispatch( createChannel(channel)),
    closeChannelModal: () => dispatch(closeChannelModal())
});

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      private: this.props.private,
      creator_id: this.props.creator_id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    if (this.props.channelFormOpen) {
      return (
        <div className="fullscreen">
          <div className="create-channel-form">
            <h2>Create a channel</h2>
            <p>
              Channels are where your members communicate.
              They're best organized around a topic -
              #flying-south, for example.
            </p>

            {this.renderErrors()}

            <div className="form-privacy">
              <button className="private-button">Private</button>
              <aside>This channel can only be joined or viewed by invite.</aside>
            </div>

            <label className="channel-input-container">
              <h3>Title</h3>
              <input
                type="text"

                onChange={this.update("title")}
                value={this.state.title}
                placeholder="#  leads"
                />
            </label>
            <label className="channel-input-container">

              <div className="purpose-field">
                <h3>Purpose</h3><aside>(optional)</aside>
              </div>
              <input
                type="text"
                onChange={this.update("description")}
                value={this.state.description}
                placeholder="e.g.  wild goose chases"
                />
            </label>

            <div className="channel-form-buttons">
              <button
                className="cancel-button"
                onClick={this.props.closeChannelModal}
                >Cancel</button>
              <button
                onClick={this.handleSubmit}
                className="submit-button">
                Create Channel
              </button>
            </div>

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
)(ChannelForm));
