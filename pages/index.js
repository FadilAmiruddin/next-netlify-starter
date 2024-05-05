// Import required modules
const http = require('http');
import React from 'react';

// Define your API endpoints and their handlers
const routes = {
  '/': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Welcome to my API!' }));
  },
  '/hello': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, World!' }));
  },
  // Add more endpoints as needed
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the requested URL and check if it matches any of the defined routes
  const routeHandler = routes[req.url];
  
  // If a matching route is found, call its handler function
  if (routeHandler) {
    routeHandler(req, res);
  } else {
    // If no matching route is found, return a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
