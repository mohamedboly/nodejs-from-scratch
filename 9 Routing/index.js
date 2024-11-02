import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end("Home Page");
  } else if (url === "/about") {
    res.end("About me Page");
  } else {
    res.end("Not Found");
  }
});
server.listen(8000, () => {
  console.log("Le serveur a démarré");
});
