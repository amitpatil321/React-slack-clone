export const user = { name: 'Amit Patil', imageUrl: 'https://randomuser.me/api/portraits/women/66.jpg' };

export const room = {
  createdAt: '2019-06-07T14:44:49Z',
  createdByUserId: '118355669689506051312',
  id: '21331018',
  isPrivate: false,
  name: 'general',
  updatedAt: '2019-06-07T14:44:49Z',
  unreadCount: 0,
  lastMessageAt: '2019-06-21T12:56:22Z',
  userIds: ['117960885566830204349', '118229216068550550491', '118355669689506051312'],
  userStore: {
    presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
    users: {
      '118355669689506051312': {
        avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      },
      '118229216068550550491': {
        avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      },
      '117960885566830204349': {
        avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      },
    },
  },
  logger: { threshold: 2 },
};

export const rooms = [
  {
    id: '21331018',
    isPrivate: false,
    name: 'general',
    users: [
      { id: 11, name: 'Amit', presence: { state: 'online' } },
      { id: 12, name: 'Coder Patil', presence: { state: 'offline' } },
      { id: 13, name: 'Vanshika Patil', presence: { state: 'online' } },
      { id: 14, name: 'Dev Patil', presence: { state: 'offline' } },
    ],
    customData: undefined
  },
  { id: '2', isPrivate: false, name: 'Design', customData: undefined },
  { id: '3', isPrivate: true, name: 'meetings', customData: undefined },
];
export const message = {
  id: 101094727,
  senderId: '118355669689506051312',
  roomId: '21467584',
  createdAt: '2019-06-26T08:30:09Z',
  updatedAt: '2019-06-26T08:30:09Z',
  text: 'joined #tyty',
  userStore: {
    instance: {
      platformVersion: 'v1',
      cluster: 'us1',
      id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
      serviceName: 'chatkit',
      serviceVersion: 'v5',
      host: 'us1.pusherplatform.io',
      logger: { threshold: 2 },
      client: {
        options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
        host: 'us1.pusherplatform.io',
        logger: { threshold: 2 },
        websocketTransport: {
          webSocketPath: '/ws',
          forcedClose: false,
          closedError: null,
          lastSentPingID: null,
          baseURL: 'wss://us1.pusherplatform.io/ws',
          lastSubscriptionID: 44,
          logger: { threshold: 2 },
          subscriptions: {
            subscriptions: {
              0: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
              },
              1: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
              },
              2: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
              },
              3: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
              },
              4: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
              },
              5: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
              },
              6: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
              },
              7: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
              },
              8: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
              },
              9: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
              },
              10: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
              },
              11: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
              },
              12: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
              },
              13: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
              },
              14: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
              },
              15: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
              },
              16: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
              },
              17: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
              },
              18: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
              },
              19: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
              },
              20: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
              },
              21: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
              },
              22: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
              },
              23: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
              },
              24: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
              },
              25: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
              },
              26: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
              },
              27: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
              },
              28: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
              },
              29: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
              },
              30: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
              },
              31: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
              },
              32: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
              },
              33: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
              },
              34: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
              },
              35: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
              },
              36: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
              },
              37: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
              },
              38: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
              },
              39: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
              },
              40: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
              },
              41: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
              },
              42: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
              },
              43: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
              },
            },
          },
          pendingSubscriptions: { subscriptions: {} },
          socket: {},
          pingInterval: 2760,
          lastMessageReceivedTimestamp: 1561727333887,
        },
        httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
        sdkProduct: 'chatkit',
        sdkVersion: '1.6.0',
        sdkPlatform: 'web',
      },
      tokenProvider: {
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
      },
    },
    presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
    logger: { threshold: 2 },
    reqs: {},
    onSetHooks: [null],
    users: {
      '118355669689506051312': {
        avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      },
      '118229216068550550491': {
        avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      },
      '117960885566830204349': {
        avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      },
    },
  },
  roomStore: {
    instance: {
      platformVersion: 'v1',
      cluster: 'us1',
      id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
      serviceName: 'chatkit',
      serviceVersion: 'v5',
      host: 'us1.pusherplatform.io',
      logger: { threshold: 2 },
      client: {
        options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
        host: 'us1.pusherplatform.io',
        logger: { threshold: 2 },
        websocketTransport: {
          webSocketPath: '/ws',
          forcedClose: false,
          closedError: null,
          lastSentPingID: null,
          baseURL: 'wss://us1.pusherplatform.io/ws',
          lastSubscriptionID: 44,
          logger: { threshold: 2 },
          subscriptions: {
            subscriptions: {
              0: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
              },
              1: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
              },
              2: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
              },
              3: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
              },
              4: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
              },
              5: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
              },
              6: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
              },
              7: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
              },
              8: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
              },
              9: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
              },
              10: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
              },
              11: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
              },
              12: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
              },
              13: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
              },
              14: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
              },
              15: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
              },
              16: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
              },
              17: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
              },
              18: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
              },
              19: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
              },
              20: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
              },
              21: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
              },
              22: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
              },
              23: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
              },
              24: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
              },
              25: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
              },
              26: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
              },
              27: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
              },
              28: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
              },
              29: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
              },
              30: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
              },
              31: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
              },
              32: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
              },
              33: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
              },
              34: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
              },
              35: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
              },
              36: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
              },
              37: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
              },
              38: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
              },
              39: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
              },
              40: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
              },
              41: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
              },
              42: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
              },
              43: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
              },
            },
          },
          pendingSubscriptions: { subscriptions: {} },
          socket: {},
          pingInterval: 2760,
          lastMessageReceivedTimestamp: 1561727333887,
        },
        httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
        sdkProduct: 'chatkit',
        sdkVersion: '1.6.0',
        sdkPlatform: 'web',
      },
      tokenProvider: {
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
      },
    },
    userStore: {
      instance: {
        platformVersion: 'v1',
        cluster: 'us1',
        id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
        serviceName: 'chatkit',
        serviceVersion: 'v5',
        host: 'us1.pusherplatform.io',
        logger: { threshold: 2 },
        client: {
          options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
          host: 'us1.pusherplatform.io',
          logger: { threshold: 2 },
          websocketTransport: {
            webSocketPath: '/ws',
            forcedClose: false,
            closedError: null,
            lastSentPingID: null,
            baseURL: 'wss://us1.pusherplatform.io/ws',
            lastSubscriptionID: 44,
            logger: { threshold: 2 },
            subscriptions: {
              subscriptions: {
                0: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                },
                1: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                },
                2: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                },
                3: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                },
                4: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                },
                5: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                },
                6: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                },
                7: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                },
                8: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                },
                9: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                },
                10: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                },
                11: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                },
                12: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                },
                13: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                },
                14: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                },
                15: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                },
                16: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                },
                17: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                },
                18: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                },
                19: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                },
                20: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                },
                21: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                },
                22: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                },
                23: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                },
                24: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                },
                25: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                },
                26: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                },
                27: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                },
                28: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                },
                29: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                },
                30: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                },
                31: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                },
                32: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                },
                33: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                },
                34: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                },
                35: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                },
                36: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                },
                37: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                },
                38: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                },
                39: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                },
                40: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                },
                41: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                },
                42: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                },
                43: {
                  headers: {
                    'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                  },
                  listeners: {},
                  path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                },
              },
            },
            pendingSubscriptions: { subscriptions: {} },
            socket: {},
            pingInterval: 2760,
            lastMessageReceivedTimestamp: 1561727333887,
          },
          httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
          sdkProduct: 'chatkit',
          sdkVersion: '1.6.0',
          sdkPlatform: 'web',
        },
        tokenProvider: {
          url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
        },
      },
      presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
      logger: { threshold: 2 },
      reqs: {},
      onSetHooks: [null],
      users: {
        '118355669689506051312': {
          avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
        },
        '118229216068550550491': {
          avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
        },
        '117960885566830204349': {
          avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
        },
      },
    },
    logger: { threshold: 2 },
    rooms: {
      21331018: {
        createdAt: '2019-06-07T14:44:49Z',
        createdByUserId: '118355669689506051312',
        id: '21331018',
        isPrivate: false,
        name: 'general',
        updatedAt: '2019-06-07T14:44:49Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-21T12:56:22Z',
        userIds: ['117960885566830204349', '118229216068550550491', '118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21422171: {
        createdAt: '2019-06-20T07:56:47Z',
        createdByUserId: '118355669689506051312',
        id: '21422171',
        isPrivate: false,
        name: 'channel1',
        updatedAt: '2019-06-20T07:56:47Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-23T06:55:42Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21422172: {
        createdAt: '2019-06-20T07:56:57Z',
        createdByUserId: '118355669689506051312',
        id: '21422172',
        isPrivate: false,
        name: 'channel2',
        updatedAt: '2019-06-20T07:56:57Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-22T13:47:17Z',
        userIds: ['117960885566830204349', '118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21422173: {
        createdAt: '2019-06-20T07:57:07Z',
        createdByUserId: '118355669689506051312',
        id: '21422173',
        isPrivate: false,
        name: 'channel3',
        updatedAt: '2019-06-20T07:57:07Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-22T13:51:16Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21422174: {
        createdAt: '2019-06-20T07:57:16Z',
        createdByUserId: '118355669689506051312',
        id: '21422174',
        isPrivate: false,
        name: 'channel4',
        updatedAt: '2019-06-20T07:57:16Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-22T14:11:58Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21429803: {
        createdAt: '2019-06-21T06:40:04Z',
        createdByUserId: '118355669689506051312',
        id: '21429803',
        isPrivate: true,
        name: '118229216068550550491118355669689506051312',
        updatedAt: '2019-06-21T06:40:04Z',
        customData: { privateChat: true, userIds: ['118229216068550550491', '118355669689506051312'] },
        unreadCount: 0,
        lastMessageAt: '2019-06-21T09:26:32Z',
        userIds: ['118229216068550550491', '118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21430072: {
        createdAt: '2019-06-21T07:36:44Z',
        createdByUserId: '118355669689506051312',
        id: '21430072',
        isPrivate: true,
        name: '117960885566830204349118355669689506051312',
        updatedAt: '2019-06-21T07:36:44Z',
        customData: { privateChat: true, userIds: ['117960885566830204349', '118355669689506051312'] },
        unreadCount: 0,
        userIds: ['117960885566830204349', '118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21430208: {
        createdAt: '2019-06-21T08:15:29Z',
        createdByUserId: '118355669689506051312',
        id: '21430208',
        isPrivate: true,
        name: '118355669689506051312118355669689506051312',
        updatedAt: '2019-06-21T08:15:29Z',
        customData: { privateChat: true, userIds: ['118355669689506051312', '118355669689506051312'] },
        unreadCount: 0,
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21452085: {
        createdAt: '2019-06-24T08:30:36Z',
        createdByUserId: '118355669689506051312',
        id: '21452085',
        isPrivate: false,
        name: 'channel 5',
        updatedAt: '2019-06-24T08:30:36Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-25T10:59:21Z',
        userIds: ['117960885566830204349', '118229216068550550491', '118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21452086: {
        createdAt: '2019-06-24T08:30:41Z',
        createdByUserId: '118355669689506051312',
        id: '21452086',
        isPrivate: false,
        name: 'channel 6',
        updatedAt: '2019-06-24T08:30:41Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-25T13:46:51Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21452087: {
        createdAt: '2019-06-24T08:30:46Z',
        createdByUserId: '118355669689506051312',
        id: '21452087',
        isPrivate: false,
        name: 'channel 7',
        updatedAt: '2019-06-24T08:30:46Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-24T08:30:47Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21467583: {
        createdAt: '2019-06-26T08:29:45Z',
        createdByUserId: '118355669689506051312',
        id: '21467583',
        isPrivate: false,
        name: 'popo',
        updatedAt: '2019-06-26T08:29:45Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-26T08:29:45Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
      21467584: {
        createdAt: '2019-06-26T08:30:08Z',
        createdByUserId: '118355669689506051312',
        id: '21467584',
        isPrivate: false,
        name: 'tyty',
        updatedAt: '2019-06-26T08:30:08Z',
        unreadCount: 0,
        lastMessageAt: '2019-06-26T08:30:09Z',
        userIds: ['118355669689506051312'],
        userStore: {
          instance: {
            platformVersion: 'v1',
            cluster: 'us1',
            id: 'a71e61a4-ff10-4d07-9f94-0c92a5862b4a',
            serviceName: 'chatkit',
            serviceVersion: 'v5',
            host: 'us1.pusherplatform.io',
            logger: { threshold: 2 },
            client: {
              options: { host: 'us1.pusherplatform.io', sdkProduct: 'chatkit', sdkVersion: '1.6.0' },
              host: 'us1.pusherplatform.io',
              logger: { threshold: 2 },
              websocketTransport: {
                webSocketPath: '/ws',
                forcedClose: false,
                closedError: null,
                lastSentPingID: null,
                baseURL: 'wss://us1.pusherplatform.io/ws',
                lastSubscriptionID: 44,
                logger: { threshold: 2 },
                subscriptions: {
                  subscriptions: {
                    0: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
                    },
                    1: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
                    },
                    2: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
                    },
                    3: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
                    },
                    4: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
                    },
                    5: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
                    },
                    6: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
                    },
                    7: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
                    },
                    8: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
                    },
                    9: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
                    },
                    10: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
                    },
                    11: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
                    },
                    12: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
                    },
                    13: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
                    },
                    14: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
                    },
                    15: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
                    },
                    16: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
                    },
                    17: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
                    },
                    18: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
                    },
                    19: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
                    },
                    20: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
                    },
                    21: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
                    },
                    22: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
                    },
                    23: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
                    },
                    24: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
                    },
                    25: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
                    },
                    26: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
                    },
                    27: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
                    },
                    28: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
                    },
                    29: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
                    },
                    30: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
                    },
                    31: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
                    },
                    32: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
                    },
                    33: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
                    },
                    34: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
                    },
                    35: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
                    },
                    36: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
                    },
                    37: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
                    },
                    38: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
                    },
                    39: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
                    },
                    40: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
                    },
                    41: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
                    },
                    42: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
                    },
                    43: {
                      headers: {
                        'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8',
                      },
                      listeners: {},
                      path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
                    },
                  },
                },
                pendingSubscriptions: { subscriptions: {} },
                socket: {},
                pingInterval: 2760,
                lastMessageReceivedTimestamp: 1561727333887,
              },
              httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
              sdkProduct: 'chatkit',
              sdkVersion: '1.6.0',
              sdkPlatform: 'web',
            },
            tokenProvider: {
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE4MTM3MDQsImlhdCI6MTU2MTcyNzMwNCwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.pHQ7vBPnVY6cNYBX4hmpuSX2saa-YgVfnD2dP7x4CI8', cacheExpiresAt: 1561813703, userId: '118355669689506051312',
            },
          },
          presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
          logger: { threshold: 2 },
          reqs: {},
          onSetHooks: [null],
          users: {
            '118355669689506051312': {
              avatarURL: 'https://lh5.googleusercontent.com/-dUI0gBt4bcI/AAAAAAAAAAI/AAAAAAAACrk/0cxsRp2K00A/s96-c/photo.jpg', createdAt: '2019-05-21T06:47:32Z', id: '118355669689506051312', name: 'Amit Patil', updatedAt: '2019-05-21T06:47:32Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '118229216068550550491': {
              avatarURL: 'https://lh5.googleusercontent.com/-nwnOWUFOKDQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf_xQ-yEg0cLLvwatEueAEmPq5eRw/s96-c/photo.jpg', createdAt: '2019-05-21T06:54:29Z', id: '118229216068550550491', name: 'Coder Patil', updatedAt: '2019-05-21T06:54:29Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
            '117960885566830204349': {
              avatarURL: 'https://lh5.googleusercontent.com/-Fvg4G9j4QSc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBX_m_wzFgPMz_RzzdeUFki7M2DQ/s96-c/photo.jpg', createdAt: '2019-05-21T06:53:45Z', id: '117960885566830204349', name: 'Poonam Patil', updatedAt: '2019-05-21T06:53:45Z', presenceStore: { '118355669689506051312': 'online', '118229216068550550491': 'offline', '117960885566830204349': 'offline' },
            },
          },
        },
        logger: { threshold: 2 },
      },
    },
  },
};
