// Import the HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Check the requested URL and respond accordingly
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello');
    } 
    else if (req.url === '/how are you') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("I'm good");
    } 
    else if (req.url === '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome Student');
    } 
    else if (req.url === '/what about you') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("I'm also good");
    } 
    else {
        // For any other URL, respond with 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('You are trying to hit a wrong URL');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
