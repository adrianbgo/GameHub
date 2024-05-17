const express = require("express");
const { Server } = require("ws");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("public"));

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const wss = new Server({ server });

wss.on("conneciton", (ws) => {
  console.log("New Client Connected");

  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
