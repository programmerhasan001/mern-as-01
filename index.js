const http = require("http");
const fs = require("fs");
const PORT = 5500;

const server = http.createServer(function (req, res) {
  const method = req.method;
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Home Page");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is About Page");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Contact Page");
  } else if (url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) throw err;
      console.log("File written successfully");
    });
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("File written successfully");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
  }
  res.end();
});

server.listen(PORT, function () {
  console.log(`server running at http://localhost:${PORT}`);
});
