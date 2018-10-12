import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

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

export const fetchChannels = () => {
  return dispatch => {
    return ChannelApiUtil.ajaxFetchChannels().then( channels => {
      return dispatch(receiveChannels(channels));
    });
  };
};

export const fetchChannel = (id) => {
  return dispatch => {
    return ChannelApiUtil.ajaxFetchChannel(id).then( channel => {
      return dispatch(receiveChannel(channel));
    });
  };
};
