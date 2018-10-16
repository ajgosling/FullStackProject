export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
import * as ChannelAPIUtil from '../util/channel_api_util';

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveChannelMessages = (messages) => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  messages
});

export const fetchChannelMessages = (channelId) => dispatch => (
  ChannelAPIUtil.ajaxFetchChannelMessages(channelId)
    .then(messages => dispatch(receiveChannelMessages(messages)))
)
