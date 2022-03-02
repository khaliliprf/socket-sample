import express from "express";
import WebSocket from "ws";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public"));
const wss = new WebSocket.Server({ port: 4000 });

wss.on("connection", ws => {
  console.log("client connected");
  ws.on("open", function open() {
    ws.send("something");
  });

  ws.on("message", function message(data) {
    console.log("received: ", data.toString());
  });
});

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("run");
});
