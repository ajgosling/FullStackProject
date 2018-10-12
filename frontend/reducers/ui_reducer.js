import merge from 'lodash/merge';
import {
  OPEN_CHANNEL_MODAL,
  CLOSE_CHANNEL_MODAL
} from '../actions/ui_actions';

const _default = {
  channelFormOpen: false
};

const uiReducer = (state = { _default }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_CHANNEL_MODAL:
      return merge({}, state, { channelFormOpen: true });
    case CLOSE_CHANNEL_MODAL:
      return merge({}, state, { channelFormOpen: false });
    default:
      return state;
  }
};

export default uiReducer;
