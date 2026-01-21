const socket = new WebSocket("wss://echo.websocket.events");

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("msgInput");

socket.onmessage = function(event) {
  const msg = document.createElement("div");
  msg.textContent = "Friend: " + event.data;
  messagesDiv.appendChild(msg);
};

function sendMessage() {
  if (input.value !== "") {
    const msg = document.createElement("div");
    msg.textContent = "You: " + input.value;
    messagesDiv.appendChild(msg);

    socket.send(input.value);
    input.value = "";
  }
}
