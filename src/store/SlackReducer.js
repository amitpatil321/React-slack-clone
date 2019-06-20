let initialState = {
	chatkitReady: false,
	user: {},
	room: null,
	rooms: [],
	messages: {},
	error: null,
	addPeopleModalVisible: false,
	remPeopleModalVisible: false,
	channelInfoVisible: false,
	addChannelModalVisible: false,
	listChannelsModalVisible: false,
	deleteChannelConfirmVisible: false,
	isLoading: { show: false, message: null }
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case 'CHATKIT_READY':
		return {
			...state,
			rooms: action.payload,
			chatkitReady: true
		};
	case 'UPDATE_ROOMS':
		return {
			...state,
			rooms: action.payload
		};
	case 'MESSAGE_RECEIVED':
		const roomId = action.payload.room.id;
		const messageId = action.payload.id;
		return {
			...state,
			messages: {
				...state.messages,
				[roomId]: {
					...state.messages[roomId],
					[messageId]: action.payload
				}
			}
		};
	case 'CURRENT_USER':
		return {
			...state,
			user: action.payload
		};
	case 'CURRENT_ROOM':
		return {
			...state,
			room: action.payload
		};
	case 'SHOW_LISTCHANNELS':
		return {
			...state,
			listChannelsModalVisible: true
		};
	case 'HIDE_LISTCHANNELS':
		return {
			...state,
			listChannelsModalVisible: false
		};
	case 'SHOW_LOADING':
		return {
			...state,
			isLoading: {
				show: true,
				message: action.payload.message ? action.payload.message : null
			}
		};
	case 'HIDE_LOADING':
		return {
			...state,
			isLoading: { show: false, message: null }
		};
	case 'SHOW_ADDCHANNEL':
		return {
			...state,
			addChannelModalVisible: true
		};
	case 'HIDE_ADDCHANNEL':
		return {
			...state,
			addChannelModalVisible: false
		};
	case 'SHOW_CHANNELINFODRAWER':
		return {
			...state,
			channelInfoVisible: true
		};
	case 'HIDE_CHANNELINFODRAWER':
		return {
			...state,
			channelInfoVisible: false
		};
	case 'SHOW_ADDPEOPLE':
		return {
			...state,
			addPeopleModalVisible: true
		};
	case 'HIDE_ADDPEOPLE':
		return {
			...state,
			addPeopleModalVisible: false
		};
	case 'SHOW_REMOVEPEOPLE':
		return {
			...state,
			remPeopleModalVisible: true
		};
	case 'HIDE_REMOVEPEOPLE':
		return {
			...state,
			remPeopleModalVisible: false
		};
	case 'SHOW_CHANNELDELCONFIRM':
		return {
			...state,
			deleteChannelConfirmVisible: true
		};
	case 'HIDE_CHANNELDELCONFIRM':
		return {
			...state,
			deleteChannelConfirmVisible: false
		};
	default:
		return state;
	}
};

export default reducer;
