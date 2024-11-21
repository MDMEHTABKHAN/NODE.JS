const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/hello'){
        res.end('Hello');
        
    }
    
    else if(req.url === '/how are you'){
        res.end("I'm good ")
    }
    
    else if(req.url === '/welcome'){
        res.end('Welcome Student')
    }
    else if(req.url === '/what about you'){
        res.end("I'm also good")
    }
    
    else{
        res.writeHead(400);
        res.end('you re trying to hit wrong url')
    }
});

server.listen(3000, () =>{
    console.log('server started');
    console.log('Server started on http://localhost:3000');
})