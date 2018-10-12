import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ChannelList from '../channel/channel_list';

class WorkspaceSidebar extends React.Component {



  render() {
    return (
      <div className="workspace-sidebar">
        <div className="current-user-info">
          <div className="workspace-info">
            <h1 className="workspace-name">Rabbit-Season</h1>
            <div className="down-caret">v</div>

          </div>
          <div className="user-logout">

            <h2>
              <img className='online-dot' src={window.images.online} />
              {this.props.currentUser.username}</h2>
            <button onClick={this.props.logout}>Logout</button>
          </div>


        </div>
        <ChannelList />
        <h1> _ </h1>
        <h1> _ </h1>
        <h1> _ </h1>
        <h1> _ </h1>
        <div className="direct-list">
          <ul>
            <li>I am direct message between trump and russians</li>
            <li>^wow that's controversial</li>
            <li>jesus montecristo</li>
          </ul>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({session, entities: {users}}) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceSidebar);
