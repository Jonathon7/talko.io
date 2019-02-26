// const express = require("express");
// const app = express();
const path = require("path");
const { TalkoServer } = require("talko-server");
const SessionHandler = require("./SessionHandler");

const sessionHandler = new SessionHandler();
const server = new TalkoServer(sessionHandler);
const express = server.getExpress();
const app = server.getApp();

app.use(express.static(`${__dirname}/../build`));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

server.start(5050);
// app.listen(5050, () => console.log("Listening on port 5050..."));
