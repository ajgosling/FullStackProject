// GreetingContainer passes as props to the presentational
//  component currentUser from the state and
//   the logout action creator. In order to
//    get the current user's information fr
//    om our state, we will need to use state.
//    session.id to get the id of the current
//     user and then use this id to get the i
//     nformation from state.entities.users. It
//      should look something like state.entiti
//      es.users[state.session.id]. You can use
//       object de-structuring in your mapState
//       ToProps function to make this look a b
//       it cleaner. Set up mapStateToProps and
//       mapDispatchToProps accordingly.

import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
