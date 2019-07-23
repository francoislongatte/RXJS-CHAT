"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var path_1 = __importDefault(require("path"));
var nedb_1 = __importDefault(require("nedb"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = socket_io_1.default(server);
var db = new nedb_1.default({ filename: path_1.default.join(__dirname, 'db', 'database'), autoload: true });
var port = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, './client/dist')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('.', 'client/dist/index.html'));
});
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on("message", function (user, message) {
        console.log(user.name, message);
        var data = JSON.stringify({
            user: user.name,
            message: message
        });
        db.insert({
            user: user.name
        }, function (err, newDocs) {
            // Two documents were inserted in the database
            // newDocs is an array with these documents, augmented with their _id
        });
        /*socket.set("lastMessage", data, function (err) {
            if (err) {
                socket.emit("error", err);
            }
        });*/
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('new-message', function (message) {
        console.log(message);
        io.emit('new-message', message);
    });
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
server.listen(port, function () {
    console.log("started on port: " + port);
});
