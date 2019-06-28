export const user = { name: 'Amit Patil', imageUrl: 'https://randomuser.me/api/portraits/women/66.jpg' };
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
  },
  { id: '2', isPrivate: false, name: 'Design' },
  { id: '3', isPrivate: true, name: 'meetings' },
];
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
          lastSubscriptionID: 97,
          logger: { threshold: 2 },
          subscriptions: {
            subscriptions: {
              53: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v5/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users',
              },
              54: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312',
              },
              55: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118355669689506051312/register',
              },
              56: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000110',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018?message_limit=5',
              },
              57: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21331018',
              },
              58: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21331018/memberships',
              },
              59: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422171',
              },
              60: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171/memberships',
              },
              61: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000012',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172?message_limit=5',
              },
              62: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422172',
              },
              63: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422172/memberships',
              },
              64: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000012',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173?message_limit=5',
              },
              65: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422173',
              },
              66: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000004',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174?message_limit=5',
              },
              67: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21422174',
              },
              68: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422174/memberships',
              },
              69: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000022',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803?message_limit=5',
              },
              70: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21429803',
              },
              71: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21429803/memberships',
              },
              72: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430072',
              },
              73: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072/memberships',
              },
              74: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208?message_limit=5',
              },
              75: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21430208',
              },
              76: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452085',
              },
              77: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085/memberships',
              },
              78: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452086',
              },
              79: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000000',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087?message_limit=5',
              },
              80: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21452087',
              },
              81: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452087/memberships',
              },
              82: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000000',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583?message_limit=5',
              },
              83: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467583',
              },
              84: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467583/memberships',
              },
              85: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_cursors/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/cursors/0/rooms/21467584',
              },
              86: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584/memberships',
              },
              87: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/118229216068550550491',
              },
              88: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit_presence/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/users/117960885566830204349',
              },
              89: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430208/memberships',
              },
              90: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000003',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452085?message_limit=5',
              },
              91: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21430072?message_limit=5',
              },
              92: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422173/memberships',
              },
              93: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000000',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21467584?message_limit=5',
              },
              94: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086/memberships',
              },
              95: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000054',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21422171?message_limit=5',
              },
              96: {
                headers: {
                  'X-SDK-Language': 'javascript', 'X-SDK-Platform': 'web', 'X-SDK-Product': 'chatkit', 'X-SDK-Version': '1.6.0', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzQ1MTMsImlhdCI6MTU2MTY0ODExMywiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.TtoVPXDk-3AGKePva9w-UsK_C36rsbWVEui-Go7BwZ8', 'Last-Event-Id': '100000002',
                },
                listeners: {},
                path: '/services/chatkit/v2/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/rooms/21452086?message_limit=5',
              },
            },
          },
          pendingSubscriptions: { subscriptions: {} },
          socket: {},
          pingInterval: 1079,
          lastMessageReceivedTimestamp: 1561651959422,
        },
        httpTransport: { baseURL: 'https://us1.pusherplatform.io' },
        sdkProduct: 'chatkit',
        sdkVersion: '1.6.0',
        sdkPlatform: 'web',
      },
      tokenProvider: {
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a71e61a4-ff10-4d07-9f94-0c92a5862b4a/token', cachedToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MzgyMTIsImlhdCI6MTU2MTY1MTgxMiwiaW5zdGFuY2UiOiJhNzFlNjFhNC1mZjEwLTRkMDctOWY5NC0wYzkyYTU4NjJiNGEiLCJpc3MiOiJhcGlfa2V5cy9hMGJiZjBjNC04MDdhLTQzMWYtYjBhMC03NzA2NmJlMTViMGUiLCJzdWIiOiIxMTgzNTU2Njk2ODk1MDYwNTEzMTIifQ.VFBSKJiUgT4CA3O-kAAIQ9dptas071vqYD9YIJegfjE', cacheExpiresAt: 1561738207, userId: '118355669689506051312',
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
};
