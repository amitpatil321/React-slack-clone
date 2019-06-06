
export function addUserToRoom(currentUser, roomId, userId, successCallback, errorCallback){
    currentUser.addUserToRoom({
        userId: userId,
        roomId: roomId
    })
    .then(() => successCallback())
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

export function createRoom(currentUser, channelName, selectedUsers, isPrivate, successCallback, errorCallback){
    currentUser.createRoom({
        name      : channelName,
        addUserIds: selectedUsers,
        private   : isPrivate
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