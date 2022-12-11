const http = require("http");
const fs = require("fs");

let myName = "K L Das";

fs.writeFile(
  "index.html",
  `<h1> Hello World </h1>\n<p> This is ${myName}... </p>`,
  (err) => {
    console.log(err);
  }
);

let input = "";
fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
  if (err) console.log(err);
  else input = data;
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`${input}`);
  res.end();
});

server.listen(5000, console.log("Server is up and running at port 5000"));
