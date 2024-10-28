import http from "http";

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;
  // res.statusMessage = "Réponse avec Succès";
  res.writeHead(200, "Réponse Avce Succès", { "Content-Type": "text/html" });

  res.write('<h1 style="color: red;">Je viens du serveur</h1>'); // on peut renvoyer du text, du html
  res.end();
});
server.listen(8000, () => {
  console.log("Le serveur a démarré");
});
