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
  return $.ajax({
    method: 'POST',
    url: `/api/channels`,
    data: {channel}
  });
};
