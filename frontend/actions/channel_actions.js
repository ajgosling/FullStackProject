import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannels = (payload) => ({
  type: RECEIVE_CHANNELS,
  payload
});

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
});

const removeChannel = (id) => ({
  type: REMOVE_CHANNEL,
  id
});

const receiveChannelErrors = (errors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const fetchChannels = () => {
  return dispatch => {
    return ChannelApiUtil.ajaxFetchChannels().then((channels) => {
      return dispatch(receiveChannels(channels));
    });
  };
};

export const fetchChannel = (id) => {
  return dispatch => {
    return ChannelApiUtil.ajaxFetchChannel(id).then((channel) => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const createChannel = (channel) => (dispatch) => {
  return (ChannelApiUtil.ajaxCreateChannel(channel)
    .then((newChannel) => {

      return (
        dispatch(receiveChannel(newChannel))
      )


    }, err => (
      dispatch(receiveChannelErrors(err.responseJSON))
    ))
  );
};
