// How the Internet Works:
// The internet is a global network of interconnected computers that communicate with each other using standardized protocols. At its core, it involves data transmission through a system of routers, switches, and servers. When you access a website, your device sends a request to a server, which processes the request and sends back the necessary data, typically in the form of a web page. This process involves various protocols like HTTP (Hypertext Transfer Protocol) for web pages and TCP/IP (Transmission Control Protocol/Internet Protocol) for data transmission.

// Core Modules of Node.js:
// Node.js is a runtime environment that allows JavaScript code to run on the server side. Its core modules include:

// HTTP Module:

// Use: Allows Node.js to create an HTTP server and handle HTTP requests and responses.
// Details: You can use it to build web servers and handle incoming requests, enabling server-side scripting.
// FS Module (File System):

// Use: Provides functions for interacting with the file system.
// Details: Useful for reading from and writing to files, managing directories, and performing file-related operations.
// Path Module:

// Use: Helps with handling file paths.
// Details: It offers methods for working with file and directory paths, making it easier to manipulate and construct paths in a platform-independent manner.
// Events Module:

// Use: Allows objects to emit and listen for events.
// Details: This module is the foundation for many asynchronous operations in Node.js, facilitating event-driven programming.
// Relative Path and Absolute Path:
// Relative Path: It specifies the location of a file or directory with respect to the current working directory. For example, if your current location is /home/user/, a relative path to a file in that directory might be ./documents/file.txt.

// Absolute Path: It defines the complete path from the root directory to the specific file or directory. For instance, /home/user/documents/file.txt is an absolute path.

// createServer in Node.js:
// Use: The createServer function is part of the HTTP module in Node.js.
// Details: It creates an HTTP server that can listen to client requests and send back responses. You typically provide a callback function that gets invoked whenever a request is received, allowing you to handle the request and send an appropriate response.
// Anonymous Functions:
// Definition: Anonymous functions, also known as function expressions, are functions without a specified name.
// Use: They are often used for short, one-time tasks or as arguments to other functions.
// Example:
// javascript
// Copy code
// const add = function (a, b) {
//     return a + b;
// };
// server.listen in Node.js:
// Use: server.listen is used to make the server start listening for incoming requests.
// Details: It binds the server to a specific port and optionally to a specific IP address. It ensures that the server is actively waiting for connections. It is crucial to call server.listen to make your server operational.
// Why server.listen is needed:
// Without server.listen, the server wouldn't actively listen for incoming requests, and your application wouldn't be accessible. It's the point where your server goes from being created to being in a listening state, ready to handle incoming HTTP requests.
// In summary, understanding these concepts and Node.js modules is fundamental for web development, as they play a crucial role in building and managing server-side applications.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Sourav');
});

server.listen(4000, () => {
    console.log('Server is running at http://localhost:4000/');
});
