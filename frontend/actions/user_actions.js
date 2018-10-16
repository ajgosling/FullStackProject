import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (payload) => ({
  type: RECEIVE_USERS,
  payload
})

export const fetchChannelUsers = (channelId) => (dispatch) => {
  return (UserApiUtil.ajaxFetchChannelUsers(channelId)
    .then((users) => {
      return (
        dispatch(receiveUsers(users))
      );
    })
  );
};
