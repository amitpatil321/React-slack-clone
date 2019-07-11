require('dotenv').config({ path: `${process.cwd()}/client/.env` });
const Chatkit = require('@pusher/chatkit-server');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || process.env.NODE_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

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

// app.get('*', (req, res) => {
//   console.log("react route");
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

app.listen(PORT, () => {
  console.log('Server running on port :' + PORT);
});

// var port = process.env.PORT || 3000;
// app.listen(port, "0.0.0.0", function () {
//   console.log("Listening on Port 3000");
// });