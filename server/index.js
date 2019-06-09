require('dotenv').config({ path: process.cwd() + '/.env' })
const http = require('http');
const Chatkit = require('@pusher/chatkit-server');
const bodyParser = require('body-parser');
const cors = require('cors');

var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Create chatkit instance
const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
    key: process.env.CHATKIT_SECRET_KEY,
})

app.post('/user', (req, res) => {
    let { googleId, imageUrl, name } = req.body
    // Make myself admin and all others will be just slack users
    let role = (googleId == process.env.CHATKIT_APP_ADMIN) ? "admin" : "SlackUser";

    chatkit
    .createUser({
        id: googleId,
        name: name,
        avatarURL : imageUrl,
        customData : { role : role }
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
                userIds: [googleId]
            })
            .then(() => res.sendStatus(201))
            .catch(err => console.error(err))
        })
        .catch((err) => console.log(err));

    })
    .catch(error => {
        if (error.error === 'services/chatkit/user_already_exists') {
            res.sendStatus(200)
        } else {
            res.status(error.status).json(error)
        }
    })
})

// TODO : Use this API instead of server token
app.post('/authenticate', (req, res) => {
const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
})

app.get("/delete", (req, res) => {
    let count = 0;
    chatkit.getRooms({ includePrivate  : true})
    .then(rooms => {
        rooms.forEach(room => {
            console.log(room.custom_data);
            if (room.custom_data !== undefined){
                chatkit.deleteRoom({
                    id: room.id
                })
                .then(() => count++ )
                .catch(err => console.error(err))
            }
        })
        res.status(200).send("Removed " + count + " rooms " + JSON.stringify(rooms))
    })
    .catch(err => console.error(err))
})

app.get("/", function(req,res){
    res.end("Hello world!");
});

app.listen(process.env.NODE_PORT || 4000, function () {
    console.log("Server started");
});