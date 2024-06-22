// creating server without express

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("server is running");
});

server.listen(3000);
