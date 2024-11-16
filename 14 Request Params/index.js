import http from "http";
import url from "url";
import querystring from "querystring";

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log("page");
  console.log(page);
  const params = url.parse(req.url).query;

  console.log("params");
  console.log(params);

  const infos = querystring.parse(params);
  console.log("info");
  console.log(infos);

  if (page === "/") {
    res.end("Home Page");
  } else if (page === "/about") {
    res.write(`Bonjour ${infos.prenom} ${infos.nom}`);
    res.write("About me Page");
    res.end();
  } else {
    res.end("Not Found");
  }
});
server.listen(8080, () => {
  console.log("Le serveur a démarré");
});
