export const OPEN_CHANNEL_MODAL = "OPEN_CHANNEL_MODAL";
export const CLOSE_CHANNEL_MODAL = "CLOSE_CHANNEL_MODAL";

export const openChannelModal = () => {
  return {
    type: OPEN_CHANNEL_MODAL
  };
};

export const closeChannelModal = () => {
  return {
    type: CLOSE_CHANNEL_MODAL
  };
};
