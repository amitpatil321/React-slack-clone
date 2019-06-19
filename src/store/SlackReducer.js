let initialState = {
    chatkitReady            : false,
    user                    : {},
    room                    : null,
    rooms                   : [],
    messages                : {},
    error                   : null,
    addPeopleModalVisible   : false,
    remPeopleModalVisible   : false,
    channelInfoVisible      : false,
    addChannelModalVisible  : false,
    listChannelsModalVisible: false,
    deleteChannelConfirmVisible:false,
    isLoading               : { show: false, message: null }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHATKIT_READY":
            return {
                ...state,
                rooms : action.payload,
                chatkitReady: true
            }
        case "UPDATE_ROOMS":
            return {
                ...state,
                rooms : action.payload
            }
        break;
        case "MESSAGE_RECEIVED":
            const roomId = action.payload.room.id
            const messageId = action.payload.id
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [roomId]: {
                        ...state.messages[roomId],
                        [messageId]: action.payload
                    }
                }
            }
        case "CURRENT_USER":
            return {
                ...state,
                user : action.payload
            }
        break;
        case "CURRENT_ROOM":
            return {
                ...state,
                room : action.payload
            }
        break;
        case "SHOW_LOADING":
            return {
                ...state,
                isLoading: { show: true, message: (action.payload.message) ? action.payload.message : null }
            }
        break;
        case "SHOW_ADDCHANNEL":
            return {
                ...state,
                addChannelModalVisible: true
            }
        break;
        case "HIDE_ADDCHANNEL":
            return {
                ...state,
                addChannelModalVisible: false
            }
        break;
        case "SHOW_CHANNELINFODRAWER":
            return {
                ...state,
                channelInfoVisible: true
            }
        break;
        case "HIDE_CHANNELINFODRAWER":
            return {
                ...state,
                channelInfoVisible: false
            }
        break;
        case "SHOW_ADDPEOPLE":
            return {
                ...state,
                addPeopleModalVisible: true
            }
        break;
        case "HIDE_ADDPEOPLE":
            return {
                ...state,
                addPeopleModalVisible: false
            }
        break;
        case "SHOW_REMOVEPEOPLE":
            return {
                ...state,
                remPeopleModalVisible: true
            }
        break;
        case "HIDE_REMOVEPEOPLE":
            return {
                ...state,
                remPeopleModalVisible: false
            }
        break;
        case "SHOW_CHANNELDELCONFIRM":
            return {
                ...state,
                deleteChannelConfirmVisible: true
            }
        break;
        case "HIDE_CHANNELDELCONFIRM":
            return {
                ...state,
                deleteChannelConfirmVisible: false
            }
        break;
        default:
            return state
    }
}

export default reducer;