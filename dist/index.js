"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var nedb_1 = __importDefault(require("nedb"));
var node_cron_1 = __importDefault(require("node-cron"));
var path_1 = __importDefault(require("path"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = socket_io_1.default(server);
var db = new nedb_1.default({ filename: path_1.default.join(__dirname, 'db', 'database'), autoload: true });
var port = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'dist')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('..', 'dist', 'index.html'));
});
io.on('connection', function (socket) {
    console.log('a user connected');
    db.find({}, function (err, docs) {
        docs.sort(function (a, b) {
            if (b.date && a.date) {
                return b.date.valueOf() - a.date.valueOf(); // reverse chronological order
            }
            return 0;
        }).reverse();
        io.emit('messages', docs);
    });
    socket.on("message", function (data) {
        console.log(data.name, data.description);
        var messageObj = {
            name: data.name,
            description: data.description,
            date: new Date()
        };
        if (messageObj.description) {
            db.insert(messageObj, function (err, newDocs) {
                io.emit('message', messageObj);
            });
        }
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
node_cron_1.default.schedule("23 * * * *", function () {
    console.log('LOG - DB IS RESET');
    db.remove('*', { multi: true }, function (err, numRemoved) { });
});
server.listen(port, function () {
    console.log("started on port: " + port);
});
