export const ajaxFetchChannelUsers = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}/users`
  });
};
