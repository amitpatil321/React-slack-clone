import Chatkit from '@pusher/chatkit-client';
import { notification } from 'antd';

const tokenProvider = new Chatkit.TokenProvider({
    url: `https://us1.pusherplatform.io/services/chatkit_token_provider/v1/${process.env.REACT_APP_CHATKIY_INSTANCE_ID}/token`
});

export default (userId, actions) => {
   new Chatkit.ChatManager({
       instanceLocator: process.env.REACT_APP_CHATKIT_INSTANCE_LOCATOR,
        userId         : userId, // We have stored googleId as userId
        tokenProvider  : tokenProvider
    })
    // Register global events
    .connect({
        onUserStartedTyping: actions.isTyping,
        onUserStoppedTyping: actions.notTyping,
        onAddedToRoom      : actions.subscribeToRoom,
        onRemovedFromRoom  : actions.removedFromRoom,
        onPresenceChanged  : actions.setUserPresence,
        onRoomDeleted      : actions.roomDeleted
    })
    .then(user => {
        // Subscribe to all rooms the user is a member of
        Promise.all(
            user.rooms.map(room =>
                user.subscribeToRoom({
                    roomId: room.id,
                    hooks: { onMessage : actions.addMessage },
                })
            )
        ).then(rooms => {
            actions.setUser(user)
            // Join the first room in the users room list
            user.rooms.length > 0 && actions.joinRoom(user.rooms[0])
            // Notify app that Connection is successfull
            actions.connected(user.rooms);
        })
    })
    .catch(error => {
        console.log("catched");
        if (error.info){
            notification.error({
                message    : error.info.error,
                description: error.info.error_description,
                onClose    : () => {
                    console.log("inside onClose");
                    // Clearn localstorage
                    localStorage.removeitem("slackUser");
                }
            });
        }
        console.log(error);
    });
}