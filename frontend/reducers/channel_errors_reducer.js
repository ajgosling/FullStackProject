import {
  RECEIVE_CHANNEL_ERRORS,
} from '../actions/channel_actions';

import {
  CLOSE_CHANNEL_MODAL
} from '../actions/ui_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case CLOSE_CHANNEL_MODAL:
      return [];
    default:
      return state;
  }
};
