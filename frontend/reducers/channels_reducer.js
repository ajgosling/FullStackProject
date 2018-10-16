import { merge } from 'lodash';
import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL
} from '../actions/channel_actions';

const _general = {
  1: {
    "id": 1,
    "title": "general",
    "direct": false,
    "members": [1]
  }
}

const channelsReducer = (state = _general, action) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_CHANNELS:
      return action.payload;
    case RECEIVE_CHANNEL:
      return merge( {}, state,
        {[action.payload.channel.id]: action.payload.channel});
    default:
      return state;
  }
};

export default channelsReducer;
