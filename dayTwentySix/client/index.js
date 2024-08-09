// Activity 3: Establish WebSocket Connection 
// Task 5 : Add a script to the HTML file to establish a webSocket connection to the sever
// Task 6: write function to handle sending and receiving messages through the webSocket connection . log recieved message to the console.
import {WebSocket} from 'ws';
const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log('Connected to the WebSocket server');
    };

    let username = '';

    // Join the chat with a username
    document.getElementById('join-button').addEventListener('click', () => {
      username = document.getElementById('username-input').value.trim();
      if (username !== '') {
        document.getElementById('username-area').style.display = 'none';
        document.getElementById('input-area').style.display = 'flex';
        document.getElementById('chat-window').style.opacity = 1;
      }
    });

    // Function to append text to the chat window
    function appendTextToChatWindow(text, sender, isUser = true) {
      const chatWindow = document.getElementById('chat-window');
      const newMessage = document.createElement('p');
      newMessage.className = 'message ' + (isUser ? 'user-message' : 'other-message');
      newMessage.textContent = `${sender}: ${text}`;
      chatWindow.appendChild(newMessage);
      chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }

    // Function to send a message
    function sendMessage() {
      const messageInput = document.getElementById('message-input');
      const message = messageInput.value.trim();
      if (message !== '') {
        appendTextToChatWindow(message, username);
        ws.send(JSON.stringify({ text: message, sender: username }));
        messageInput.value = ''; // Clear the input
      }
    }

    // WebSocket connection (assuming ws is already defined and connected)
    const ws = new WebSocket("ws://localhost:3000");

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const isUser = message.sender === username;
      appendTextToChatWindow(message.text, message.sender, isUser);
    };

    // Event listener for the send button
    document.getElementById('send-button').addEventListener('click', sendMessage);

    // Event listener for pressing the Enter key
    document.getElementById('message-input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  
    ws.onclose = () => {
      console.log('Disconnected from the WebSocket server');
    };