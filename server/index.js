const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
// Get role in ./src/role.js
// role ? [wolf] : [people]
// Get Fake APIs
const roles = require("./src/roles");
// Get Votes
const votes = require("./src/votes");

const PORT = 4000 || process.env.PORT ;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const NEW_ROLE_EVENT = "newRole";
const NEW_VOTES = "newVotes";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Listen to getRole
  socket.on(NEW_ROLE_EVENT, (data) => {
    data = roles.getRole(data);
    // console.log("data: ", data);
    io.emit(NEW_ROLE_EVENT, data);
  });

  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // New VOtes
  socket.on(NEW_VOTES, (Arr, playerList) => {
    playerList = votes.getVotes(Arr, playerList);
    io.in(roomId).emit(NEW_VOTES, playerList);
  });

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
