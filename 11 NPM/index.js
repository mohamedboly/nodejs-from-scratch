import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
  res.end("<h1>Hello World</h1>");
});
server.listen(8000, () => {
  console.log(`Serveur démarréennn`);
});
