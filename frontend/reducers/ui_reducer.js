import merge from 'lodash/merge';
import {
  OPEN_CHANNEL_MODAL,
  CLOSE_CHANNEL_MODAL,
  OPEN_DIRECT_MODAL,
  CLOSE_DIRECT_MODAL,
  OPEN_CHANNEL_INFO_MODAL,
  CLOSE_CHANNEL_INFO_MODAL,
  OPEN_CHANNEL_PURPOSE,
  CLOSE_CHANNEL_PURPOSE,
  OPEN_CHANNEL_USERS,
  CLOSE_CHANNEL_USERS
} from '../actions/ui_actions';

const _default = {
  channelFormOpen: false,
  directFormOpen: false,
  channelInfoOpen: true,
  channelPurposeOpen: false,
  channelUsersOpen: true
};

const uiReducer = (state = _default, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_CHANNEL_MODAL:
      return merge({}, state, { channelFormOpen: true });
    case CLOSE_CHANNEL_MODAL:
      return merge({}, state, { channelFormOpen: false });
    case OPEN_DIRECT_MODAL:
      return merge({}, state, { directFormOpen: true });
    case CLOSE_DIRECT_MODAL:
      return merge({}, state, { directFormOpen: false });
    case OPEN_CHANNEL_INFO_MODAL:
      return merge({}, state, { channelInfoOpen: true });
    case CLOSE_CHANNEL_INFO_MODAL:
      return merge({}, state, { channelInfoOpen: false });
    case OPEN_CHANNEL_PURPOSE:
      return merge({}, state, { channelPurposeOpen: true });
    case CLOSE_CHANNEL_PURPOSE:
      return merge({}, state, { channelPurposeOpen: false });
    case OPEN_CHANNEL_USERS:
      return merge({}, state, { channelUsersOpen: true });
    case CLOSE_CHANNEL_USERS:
      return merge({}, state, { channelUsersOpen: false });
    default:
      return state;
  }
};

export default uiReducer;
