import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { uniqBy, filter } from 'lodash';

import ChatKit from '../../Chatkit';
import ChatHome from '../../components/ChatHome';
import Notification from '../../components/Notification';
import { subscribeToRoom, leaveRoom, removeUserFromRoom } from '../../utils/ChatKitUtil';
import { setGeneralSelected } from '../../utils/SlackUtils';
import { Provider } from '../../store/store';

//TODO : Improve performance of all components
//TDOD : Handle no internet connection error
//TDOD : Show no internet timeout screen
//TODO : Add prop types again
//TODO : repalce <Consumer></Consumer> with useContext  :(
//TODO : Remove all ../ from path as we now have .env node_path settings
//TODO : Test all errors, and make sure they get printed properly
export default class ChatHomeContainer extends Component {
    state = {
        chatkitReady: false,
        user        : {},
        room        : null,
        rooms       : [],
        messages    : {},
        error       : null,
        addPeopleModalVisible : false,
        remPeopleModalVisible : false,
        channelInfoVisible    : false,
        addChannelModalVisible: false
    }

    actions = {
        connected: rooms => this.setState({ rooms, chatkitReady: true }),
        refresh  : ()    => this.forceUpdate(),
        isTyping : ()    => {
            console.log("isTyping");
        },
        notTyping: () => {
            console.log("notTyping");
        },
        subscribeToRoom: rooms => {
            console.log("Subscribe/added to room");
            // Add room in rooms array and then remove duplicates.
            let allRooms = uniqBy([...this.state.rooms, rooms], function (room) { return room.id; });

            this.setState({ rooms: allRooms })
            // Subscribe current user to newly created room to receive new messages
            subscribeToRoom(this.state.user, rooms.id, {
                onMessage: this.actions.addMessage
            })
        },
        removedFromRoom: room => {
            // Remove room from rooms array
            this.setState({ rooms: [...filter(this.state.rooms, (eachRoom) => eachRoom.id !== room.id)] })
        },
        setUserPresence: () => {
            //setUserPresence doesnt cause re-render so we forcefully update the view
            this.forceUpdate()
        },
        addMessage: payload => {
            const roomId = payload.room.id
            const messageId = payload.id
            // Update local message cache with new message
            this.setState(prevState => ({
                messages: {
                    ...prevState.messages,
                    [roomId]: {
                        ...prevState.messages[roomId],
                        [messageId]: payload
                    }
                }
            }))
        },
        setUser: user => {
            this.setState({ user })
        },
        joinRoom: room => {
            // Set current room
            this.setState({ room })
        },
        roomDeleted: room => {
            // Remove room from rooms list
            this.actions.removedFromRoom(room)
        }
    }

    componentDidMount() {
        // TODO : Check if .env file is missing? and handle error accordingly
        let storageUser = JSON.parse(localStorage.getItem("slack"));
        if (storageUser && storageUser.googleId)
            ChatKit(JSON.parse(localStorage.getItem("slack")).googleId, this.actions);
    }

    // Handle show/hide add people modal
    _showAddPeopleModal = () => this.setState({ addPeopleModalVisible : true })
    _hideAddPeopleModal = () => this.setState({ addPeopleModalVisible : false })

    // Handle show/hide remove people modal
    _showRemovePeopleModal = () => this.setState({ remPeopleModalVisible : true })
    _hideRemovePeopleModal = () => this.setState({ remPeopleModalVisible : false })

    // Show hide channel info drawer
    _showDrawer = () => this.setState({ channelInfoVisible : true })
    _hideDrawer = () => this.setState({ channelInfoVisible : false })

    // Show/hide add channel modal
    _showAddChannelModal = () => this.setState({ addChannelModalVisible : true })
    _hideAddChannelModal = () => this.setState({ addChannelModalVisible : false })

    // Leave room
    _leaveRoom = () => {
        let { user, room } = this.state
        // LeaveRoom API doesnt have any hook so we are using removeuser API method
        removeUserFromRoom(user, room.id, user.id, () => setGeneralSelected(), (err) => Notification("error", "Error leaving channel", err))
    }

    //TODO : Impliment should component update with deep object comaprison for cyclic objects to improve performance
    // shouldComponentUpdate(nextProps, nextState){
    //     let { user, room, rooms } = this.state;
    //     if (Object.keys(user).length &&
    //         room !== null &&
    //         rooms.length &&
    //         !isEqual(this.state, nextState)
    //     )
    //         return true
    //     return false
    // }

    render() {
        let storageUser = JSON.parse(localStorage.getItem("slack"));

        if (!storageUser || !storageUser.googleId){
            return <Redirect to="/login" />
        }

        return (
            <Provider value={{
                state           : this.state,
                joinRoom        : this.actions.joinRoom,
                showAddPeople   : this._showAddPeopleModal,
                hideAddPeople   : this._hideAddPeopleModal,
                showRemovePeople: this._showRemovePeopleModal,
                hideRemovePeople: this._hideRemovePeopleModal,
                leaveRoom       : this._leaveRoom,
                showDrawer      : this._showDrawer,
                hideDrawer      : this._hideDrawer,
                showAddChannel  : this._showAddChannelModal,
                hideAddChannel  : this._hideAddChannelModal
            }} >
                <ChatHome
                    messages = {this.state.messages}
                />
            </Provider>
        )
    }
}
