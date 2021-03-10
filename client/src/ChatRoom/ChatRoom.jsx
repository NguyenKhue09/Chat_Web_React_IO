import React from "react";

import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  // userName
  const [userName, setUserName] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

   // UserBox:
  const handleNewUserName = (event) => {
    // ... Do something...
    setUserName(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage,userName);
    setNewMessage("");
  };

  // Test:
  // console.log(messages);

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.user}{ ":\t" }{message.body}
            </li>
          ))}
        </ol>
      </div>
      <h4>UserName:</h4>
      <input
        value={userName}
        onChange={handleNewUserName}
        placeholder="Type your username."
        className="user-input-field"
      />
      <br />
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;
