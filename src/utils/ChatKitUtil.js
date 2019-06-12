
// TODO : remove unwanted ROOM variable in callbacks where its not needed
export function addUserToRoom(currentUser, roomId, userId, successCallback, errorCallback){
    currentUser.addUserToRoom({
        userId: userId,
        roomId: roomId
    })
    .then(() => successCallback())
    .catch(err => errorCallback(err))
}
export function joinRoom(currentUser, room, successCallback, errorCallback){
    currentUser.joinRoom({ roomId: room.id })
    .then((room) => successCallback(room))
    .catch(err => errorCallback(err))
}

export function removeUserFromRoom(currentUser, roomId, userId, successCallback, errorCallback) {
    currentUser.removeUserFromRoom({
        userId: userId,
        roomId: roomId
    })
    .then(() => successCallback())
    .catch(err => errorCallback(err))
}

export function sendMessage(currentUser, roomId, message, successCallback, errorCallback) {
    currentUser.sendMultipartMessage({
        roomId: roomId,
        parts: [{ type: "text/plain", content: message }]
    })
    .then(messageId => successCallback(messageId))
    .catch(err => errorCallback(err));
}

export function createRoom(currentUser, channelName, selectedUsers, isPrivate, customData = { privateChat : false }, successCallback, errorCallback){
    currentUser.createRoom({
        name      : channelName,
        addUserIds: selectedUsers,
        private   : isPrivate,
        customData: customData,
    })
    .then(room => successCallback(room))
    .catch(err => errorCallback(err));
}

export function subscribeToRoom(currentUser, roomId, hooks){
    currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: hooks,
    })
}

export function leaveRoom(currentUser, roomId, successCallback, errorCallback){
    currentUser.leaveRoom({ roomId: roomId })
    .then(room => successCallback(room))
    .catch(err => errorCallback(err));
}

export function getJoinableRooms(currentUser, successCallback, errorCallback) {
    currentUser.getJoinableRooms()
    .then(rooms => successCallback(rooms))
    .catch(err => errorCallback(err));
}

export function setReadCursor(currentUser, room, messages){
    currentUser.setReadCursor({
        roomId: room.id,
        position: parseInt(Object.keys(messages)[Object.keys(messages).length - 1]) // Finds last message
    })
    .catch(err => console.log("Error setting read cursor!"));
}