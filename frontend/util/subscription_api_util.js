export const ajaxCreateSubscription = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/${id}/subscriptions`
  });
};

export const ajaxDeleteSubscription = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${id}/subscriptions/1`
  });
};
