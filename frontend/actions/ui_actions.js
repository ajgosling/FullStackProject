export const OPEN_CHANNEL_MODAL = "OPEN_CHANNEL_MODAL";
export const CLOSE_CHANNEL_MODAL = "CLOSE_CHANNEL_MODAL";
export const OPEN_DIRECT_MODAL = "OPEN_DIRECT_MODAL";
export const CLOSE_DIRECT_MODAL = "CLOSE_DIRECT_MODAL";
export const OPEN_CHANNEL_INFO_MODAL = "OPEN_CHANNEL_INFO_MODAL";
export const CLOSE_CHANNEL_INFO_MODAL = "CLOSE_CHANNEL_INFO_MODAL";
export const OPEN_CHANNEL_PURPOSE = "OPEN_CHANNEL_PURPOSE";
export const CLOSE_CHANNEL_PURPOSE = "CLOSE_CHANNEL_PURPOSE";
export const OPEN_CHANNEL_USERS = "OPEN_CHANNEL_USERS";
export const CLOSE_CHANNEL_USERS = "CLOSE_CHANNEL_USERS";

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

export const openDirectModal = () => {
  return {
    type: OPEN_DIRECT_MODAL
  };
};

export const closeDirectModal = () => {
  return {
    type: CLOSE_DIRECT_MODAL
  };
};

export const openChannelInfoModal = () => {
  return {
    type: OPEN_CHANNEL_INFO_MODAL
  };
};

export const closeChannelInfoModal = () => {
  return {
    type: CLOSE_CHANNEL_INFO_MODAL
  };
};

export const openChannelPurpose = () => {
  return {
    type: OPEN_CHANNEL_PURPOSE
  };
};

export const closeChannelPurpose = () => {
  return {
    type: CLOSE_CHANNEL_PURPOSE
  };
};

export const openChannelUsers = () => {
  return {
    type: OPEN_CHANNEL_USERS
  };
};

export const closeChannelUsers = () => {
  return {
    type: CLOSE_CHANNEL_USERS
  };
};
