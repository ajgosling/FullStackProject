export const ajaxFetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/channels'
  });
};

export const ajaxFetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};

export const ajaxCreateChannel = (channel) => {
  console.log("channel", channel)
  return $.ajax({
    method: 'POST',
    url: `/api/channels`,
    data: {
      channel
    }
  });
};

export const ajaxFetchChannelUsers = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}/users`
  });
};

export const ajaxFetchChannelMessages = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}/messages`
  });
};
