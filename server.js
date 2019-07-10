require('dotenv').config({ path: `${process.cwd()}/client/.env` });
const Chatkit = require('@pusher/chatkit-server');
const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create chatkit instance
const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
  key: process.env.CHATKIT_SECRET_KEY,
});

app.post('/user', (req, res) => {
  const { googleId, imageUrl, name } = req.body;
  // Make myself admin and all others will be just slack users
  const role = (googleId == process.env.CHATKIT_APP_ADMIN) ? 'admin' : 'SlackUser';

  chatkit
    .createUser({
      id: googleId,
      name,
      avatarURL: imageUrl,
      customData: { role },
    })
    .then(() => {
      // Assign role to user
      chatkit.assignGlobalRoleToUser({
        userId: googleId,
        name: role,
      })
        .then(() => {
          // By default add user to 'general' room
          chatkit.addUsersToRoom({
            roomId: process.env.CHATKIT_GENERAL_ROOM,
            userIds: [googleId],
          })
            .then(() => res.sendStatus(201))
            .catch(err => console.error(err));
        })
        .catch(err => console.log(err));
    })
    .catch((error) => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.status).json(error);
      }
    });
});

// TODO : Use this API instead of server token
app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id });
  res.status(authData.status).send(authData.body);
});

app.get('/delete', (req, res) => {
  let count = 0;
  chatkit.getRooms({ includePrivate: true })
    .then((rooms) => {
      rooms.forEach((room) => {
        if (room.custom_data !== undefined) {
          chatkit.deleteRoom({
            id: room.id,
          })
            .then(() => count++)
            .catch(err => console.error(err));
        }
      });
      res.status(200).send(`Removed ${count} rooms ${JSON.stringify(rooms)}`);
    })
    .catch(err => console.error(err));
});

app.get('/', (req, res) => {
  res.end('Server is running');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port :' + process.env.NODE_PORT || 3000);
});

// var port = process.env.PORT || 3000;
// app.listen(port, "0.0.0.0", function () {
//   console.log("Listening on Port 3000");
// });