import * as ChannelApiUtil from '../util/channel_api_util';
import * as SubscriptionApiUtil from '../util/subscription_api_util';

import { receiveMessage } from './message_actions';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';
export const RECEIVE_CHANNEL_USERS = 'RECEIVE_CHANNEL_USERS';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';


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

//new user channel member
export const createSubscription = (id) => (dispatch) => {
  return (SubscriptionApiUtil.ajaxCreateSubscription(id)
    .then((channel) => {
      return (
        dispatch(receiveChannel(channel))
      )
    }, err => (
      dispatch(receiveChannelErrors(err.responseJSON))
    ))
  );
};

//delete user channel member
export const deleteSubscription = (channelId) => (dispatch) => {
  return (SubscriptionApiUtil.ajaxDeleteSubscription(channelId)
    .then((channels) => {
      return (
        dispatch(receiveChannels(channels))
      )
    }, err => (
      dispatch(receiveChannelErrors(err.responseJSON))
    ))
  );
};


//makes new action cable link
export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "MainChannel", id: channelId},
    {
      received: function(data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
  })
}
