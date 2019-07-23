import express from "express";
import http from "http";
import nedb from "nedb";
import cron from "node-cron";
import path from "path";
import socketIO from "socket.io";

interface Message {
  name: string;
  description: string;
  date?: Date;
}

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
let db = new nedb({
  filename: path.join(__dirname, "db", "database"),
  autoload: true
});

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve("..", "dist", "index.html"));
});

io.on("connection", socket => {
  console.log("a user connected");
  db.find({}, function(err: Error, docs: Message[]) {
    docs
      .sort((a: Message, b: Message) => {
        if (b.date && a.date) {
          return b.date.valueOf() - a.date.valueOf(); // reverse chronological order
        }
        return 0;
      })
      .reverse();
    io.emit("messages", docs);
  });

  socket.on("message", function(data: Message) {
    console.log(data.name, data.description);

    const messageObj: Message = {
      name: data.name,
      description: data.description,
      date: new Date()
    };
    if (messageObj.description) {
      db.insert(messageObj, function(err, newDocs) {
        io.emit("message", messageObj);
      });
    }
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

cron.schedule("23 * * * *", () => {
  console.log("LOG - DB IS RESET");
  db.remove("*", { multi: true }, function(err, numRemoved) {});
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
