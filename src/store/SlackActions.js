export const connected = (rooms) => (
    { type: "CHATKIT_READY", payload : rooms }
);
export const updateRooms = (rooms) => (
    { type: "UPDATE_ROOMS", payload: rooms }
);
export const setMessages = (messages) => (
    { type: "MESSAGE_RECEIVED", payload: messages }
);
export const currentUser = (user) => (
    { type: "CURRENT_USER", payload : user }
);
export const joinRoom = (room) => (
    { type: "CURRENT_ROOM", payload : room }
);
export const showLoading = (message) => (
    { type: "SHOW_LOADING", payload : { show: true, message: message }}
);
export const showAddChannel = () => (
    { type: "SHOW_ADDCHANNEL"}
);
export const hideAddChannel = () => (
    { type: "HIDE_ADDCHANNEL"}
);
export const showAddPeople = () => (
    { type: "SHOW_ADDPEOPLE"}
);
export const hideAddPeople = () => (
    { type: "HIDE_ADDPEOPLE"}
);
export const showRemovePeople = () => (
    { type: "SHOW_REMOVEPEOPLE"}
);
export const showChannelInfoDrawer = () => (
    { type: "SHOW_CHANNELINFODRAWER"}
);
export const hideChannelInfoDrawer = () => (
    { type: "HIDE_CHANNELINFODRAWER"}
);
export const leaveRoom = () => (
    { type: "LEAVE_ROOM"}
);
