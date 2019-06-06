import { filter, orderBy } from 'lodash';

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

// Returns list of users which are member of room
export function getRoomUsers(rooms, currentRoom){
    let allUsers = [];
    // Find general room, as We are storing all the users in 'general' room
    let generalRoom = filter(rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM })
    if (generalRoom.length)
        // List all users except which are already member of this room
        generalRoom[0].users.forEach(eachUser => {
            if (currentRoom.userIds.includes(eachUser.id.toString()))
                allUsers.push(eachUser);
        })
    return allUsers;

}

// Creates a message to be posted in channel
export function peopleJoinedMessage(currentUser, channel, people, type) {
    let message = "", myName = "";
    // Convert all ids to names
    let peopleNames = people.map(id => currentUser.userStore.users[id].name)

    // Let room/channel know about new members
    if (currentUser !== undefined) {
        myName = currentUser.name;

        if (people.length) {
            if (people.length === 1) message = peopleNames[0]
            else if (people.length === 2) message = peopleNames.join(" and ")
            else if (people.length > 2) {
                let last = peopleNames.pop()
                message = peopleNames.join(", ") + " and " + last
            }
            if (type === "NEW")
                return " joined #" + channel + " along with " + message;
            else
                return myName + " added " + message + " to #" + channel;
        } else
            // User created channel but didnt add anyone
            return "joined #" + channel;

    }
}

// Returns list of all the available users
export function getAllUsers(user) {
    // Find general room as We are storing all the users in 'general' room
    let generalRoom = filter(user.rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM })
    if (generalRoom.length)
        return orderBy(generalRoom[0].users, ['name'], ['asc']);
}

// Returns list of all joinable(public) available rooms
export function getSubscribedRooms(rooms) {
    // Find general room as We are storing all the users in 'general' room
    // let generalRoom = filter(user.rooms, { id: process.env.REACT_APP_CHATKIT_GENERAL_ROOM })
    // if (generalRoom.length)
    //     return orderBy(generalRoom[0].users, ['name'], ['asc']);
}

export function getUserName(room, id){
    return room.userStore.users[id].name;
}
export function getUserPic(room, id){
    return room.userStore.users[id].avatarURL;
}

export function setGeneralSelected() {
    // Set `general` channel selected
    document.querySelector(".channel-"+process.env.REACT_APP_CHATKIT_GENERAL_ROOM).click()
}