import React from 'react';
import GiphySearch from 'react-giphy-search';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      user_id: props.currentUser.id,
      channel_id: props.channel.id,
      searchGif: false

    };
    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleGif = this.toggleGif.bind(this);
    this.handleGif = this.handleGif.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      channel_id: nextProps.channel.id
    })

  }

  update(e) {
    if (e.target.value !== "\n") {
     this.setState({ body: e.target.value });
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      let submitState = this.state;
      delete submitState.searchGif;
      App[this.props.channel.id].speak(submitState);
      this.setState({body: ''});
    }
  }

  toggleGif() {
    this.setState({
      searchGif: !this.state.searchGif
    })
  }

  handleGif(id) {
    let submitState = {
      body: `https://giphy.com/embed/${id}`,
      user_id: this.state.user_id,
      channel_id: this.state.channel_id

    };
    App[this.props.channel.id].speak(submitState);
    this.toggleGif();

  }

  render() {
    let gif;
    if(this.state.searchGif) {
      gif = <GiphySearch
        onGifSelection={(id) => this.handleGif(id)}
        styles={{
          wrapper: {
            'width': '666px',
            'height': '50%',
            'maxWidth': '100%',
            'paddingTop': '5px',
            'paddingBottom': '5px',
            'paddingLeft': '10px',
            'backgroundColor': 'white',
            'position': 'absolute',
            'left': '240px',
            'bottom': '70px',
            'borderRadius': '5px',
            'zIndex': '90',
            'border': '1px solid lightgray'
          },
          gifList: {
            'borderRadius': '5px',
            'display': 'flex',
            'flexWrap': 'wrap',
            'overflowX': 'hidden',
            'overflowY': 'auto'
          },
          gifListItem: {
            'paddingRight': '7px'
          },
          searchBar: {
            'borderRadius': '5px',
            'border': '1px solid '
          },

        }}
      />;
    } else {
    gif = null;
    }
    return (
      <div className="message-form-container">
        {gif}
        <div className='gif-button' onClick={this.toggleGif}>
          GIF
        </div>
        <form className='message-form'>
          <input value={this.state.body}
            onChange={this.update}
            onKeyPress={this.handleKeyPress}
            placeholder={`Message #${this.props.channel.title}`}/>
        </form>

      </div>


    );
  }
}

export default MessageForm;
