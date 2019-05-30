import { filter } from 'lodash';

// Returns list of users which are not a member of room yet
export function getJoinableUsers(rooms, currentRoom) {
    let allUsers = [];
    // Find general room, as We are storing all the users in 'general' room
    let generalRoom = filter(rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM })
    if (generalRoom.length)
        // List all users except which are already member of this room
        generalRoom[0].users.forEach(eachUser => {
            if (!currentRoom.userIds.includes(eachUser.id.toString()))
                allUsers.push(eachUser);
        })
        return allUsers;
}
