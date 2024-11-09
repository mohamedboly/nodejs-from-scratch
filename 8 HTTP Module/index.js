import http from "http";

const server = http.createServer(function (req, res) {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;
  // res.statusMessage = "Réponse avec Succès";
  // res.writeHead(200, "Réponse Avce Succès", { "Content-Type": "text/html" });

  res.end("<h1>Salut tout le monde</h1>"); // on peut renvoyer du text, du html
  // res.end();
});
server.listen(8080, () => {
  console.log("Le serveur a démarré");
});
