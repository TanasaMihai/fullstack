const http = require('http');

const server = http.createServer((req, res) => {
    res.end('You are lucky , you have a response from your server !');
});

server.listen(process.env.PORT || 3000);