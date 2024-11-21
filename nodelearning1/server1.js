// Import the built-in 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log the incoming request URL for debugging purposes
    console.log(`Received request for: ${req.url}`);

    // Route handling based on the request URL
    if (req.url === '/hello') {
        // Respond with a "Hello" message
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set header with status and content type
        res.end('Hello');
    } 
    else if (req.url === '/how are you') {
        // Respond with a "how are you" message
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("I'm good");
    } 
    else if (req.url === '/welcome') {
        // Respond with a "welcome" message
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome Student');
    } 
    else if (req.url === '/what about you') {
        // Respond with a "what about you" message
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("I'm also good");
    } 
    else {
        // Default case for unmatched routes
        res.writeHead(404, { 'Content-Type': 'text/plain' }); // Respond with 404 Not Found
        res.end('You are trying to hit a wrong URL');
    }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
