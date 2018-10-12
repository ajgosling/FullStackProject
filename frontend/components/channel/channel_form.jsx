import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => ({
  title: '',
  description: '',
  private: false,
  creator_id: state.session.id
});


const mapDispatchToProps = dispatch => ({
    createChannel: channel => dispatch( createChannel(channel))
});

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      private: this.props.private
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state)
      .then( (id) => {
        this.props.history.push(`/channels/${id}`);
    });
  }

  render() {
    return (
      <div className="fullscreen">
        <div className="create-channel-form">
          <h2>Create a channel</h2>
          <p>
            Channels are where your members communicate.
            They're best organized around a topic -
            #flying-south, for example.
          </p>
          <div className="form-privacy">
            <button>Private</button>
            <aside>This channel can only be joined or viewed by invite.</aside>
          </div>
          <label className="channel-input-container">
            <h3>Title</h3>
            <input
              type="text"
              onChange={this.update("title")}
              value={this.state.title}
              placeholder="e.g. leads"
              />
          </label>
          <label className="channel-input-container">
            <h3>Purpose</h3><aside>(optional)</aside>
            <input
              type="text"
              onChange={this.update("description")}
              value={this.state.description}
              placeholder="quacking most likely"
              />
          </label>

          <div className="channel-form-buttons">
            <button className="cancel-button">Cancel</button>
            <button
              className="submit-button"
              disabled={!this.state.title}>
              Create Channel
            </button>
          </div>

        </div>
        <div className="quit-button">
          <div>x</div>
          <p>esc</p>
        </div>
      </div>
    )

  }

}

export default ChannelForm;
