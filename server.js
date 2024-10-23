const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);

console.log("Server running on port 3000");
