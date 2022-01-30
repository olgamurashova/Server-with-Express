## Server with Express

### General information

Express is a Node module, so in order to use it, we imported it into our program file. To create a server, the imported express function must be invoked.
On the first line, we imported the Express library with require. When invoked on the second line, it returns an instance of an Express application. This application can then be used to start a server and specify server behavior.
In order for our server to start responding, we have to tell the server where to listen for new requests by providing a port number argument to a method called app.listen(). The server will then listen on the specified port and respond to any requests that come into it.
The second argument is a callback function that will be called once the server is running and ready to receive responses.
In this example, our app.listen() call will start a server listening on port 4001, and once the server is started it will log 'Server is listening on port 4001'.
 
### Tools used
+ JavaScript
+ VS
+ node.js
+ Express
+ command line
