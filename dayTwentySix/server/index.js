// Day 26 : Project 3 - chat Application

// Task/Activities:
// Activity 1: Setting up project
// Task 1: Initialize a new project directory and set up basic HTML structure for the chat application.
// Task 2: Add a basic CSS file to style the chat application , including a chat window and input area.

// Activity 2: Setting up WebSocket Server
// Task 3: Set up a simple webSocket using Node js Ws library Write a script to create the server and handle connections
  import { WebSocketServer } from "ws";
  import express from 'express';


  const app=express();
  const port=3000;
  
 try {
	const ws=new WebSocketServer({port},
		console.log("running on port",port)
	  )} 
catch (error) {
	console.log("server not connect",error);
 }
 // Task 4: Test the WebSocket server by logging message when clients connect and disconnect
 
// Activity 3: Establish WebSocket Connection 
// Task 5 : Add a script to the HTML file to establish a webSocket connection to the sever
// Task 6: write function to handle sending and receiving messages through the webSocket connection . log recieved message to the console.

// Activity 4: Building the chat interface
// Task 7: Nodify the HTML strucutre too include a chat window and an input area for typing message STYLE the chat window and Input area using css
// Task 8: Write a function to display received message in the chat window add event listner to send message when the user presses Enter or Click a send button

// Activity 5: Enhancing the chat Application
// Task 9: Add user authentication to the chat application Allow users to enter a username before joining the chat Display userbame alongSide their message in the chat window
// Task 10: Add CSS styles to different messages sent by different  users . Add CSS animations or transitions to make the chat application more interactive and visually appealing