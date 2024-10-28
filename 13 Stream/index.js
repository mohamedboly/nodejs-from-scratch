import { createReadStream } from "fs";
// création du stream, tout le fichier n'est pas chargé en mémoire
const stream = createReadStream("./data.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

// traitement à chaque émisson de donnée
stream.on("data", (data) => {
  console.log(data);
});
