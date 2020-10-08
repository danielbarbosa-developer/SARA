const app = require('./app/app.js');
const http = require('http');

const port = process.env.PORT || 3000; // Port 3000 as default

const server = http.createServer(app);

server.listen(port, ()=> console.log("Listening on port: " + port));

module.exports = server;
