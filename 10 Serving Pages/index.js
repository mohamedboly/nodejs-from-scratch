import http from "http";
import fs from "fs";

import { fileURLToPath } from "url";
import { dirname } from "path";

const filename = fileURLToPath(import.meta.url);
const actualDirname = dirname(filename);

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile(`${actualDirname}/public/home.html`, (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile(`${actualDirname}/public/about.html`, (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.end("Not Found");
  }
});
server.listen(8000, () => {
  console.log("Le serveur a démarré");
});
