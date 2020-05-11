//Load HTTP module
const http = require("http");
// const hostname = '0.0.0.0';
const port = 9292;

//Create HTTP server and listen on port 9292 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from hellonode.js\n');
});

//listen for request on port 9292, and as a callback function have the port listened on logged
server.listen(port, () => {
  console.log(`My server is running at http://${port}/`);
});
