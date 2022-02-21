const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(" A User connected");
  // io.to(si).emit("welcome", "Hello this is socket");
});
