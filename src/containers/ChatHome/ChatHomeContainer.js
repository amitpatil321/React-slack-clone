import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { uniqBy, filter, isEqual } from 'lodash';

import ChatKit from '../../Chatkit';
import ChatHome from '../../components/ChatHome';
import { subscribeToRoom } from '../../utils/ChatKitUtil';
import { Provider } from '../../store/store';

export default class ChatHomeContainer extends Component {
    state = {
        chatkitReady: false,
        user        : {},
        room        : null,
        rooms       : [],
        messages    : {},
        error       : null,
        addPeopleModalVisible : false
    }

    actions = {
        connected: rooms => this.setState({ rooms, chatkitReady: true }),
        isTyping: () => {
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
            // console.log("setUserPresence");
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
    _showAddPeopleModal = () => this.setState({ addPeopleModalVisible: true })
    _hideAddPeopleModal = () => this.setState({ addPeopleModalVisible: false })

    //TODO : Impliment should component update with deep object comaprison for cyclic objects to improve performance
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(this.state.user);
    //     if(!isEqual(this.props, nextProps) ||
    //         !isEqual(this.state.user, nextState.user) ||
    //         !isEqual(this.state.room, nextState.room) ||
    //         !isEqual(this.state.rooms, nextState.rooms)
    //     )
    //         return true
    //     return false
    // }

    render() {
        let { room, rooms, user } = this.state;
        let storageUser = JSON.parse(localStorage.getItem("slack"));

        if (!storageUser || !storageUser.googleId){
            return <Redirect to="/login" />
        }

        return (
            <Provider value={{
                state : this.state,
                joinRoom : this.actions.joinRoom,
                showAddPeople : this._showAddPeopleModal,
                hideAddPeople : this._hideAddPeopleModal
            }} >
                <ChatHome
                    messages = {this.state.messages}
                />
            </Provider>
        )
    }
}
