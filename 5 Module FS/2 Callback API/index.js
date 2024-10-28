import * as fs from "fs";

fs.mkdir("dossierCreerAvecCallBackApi", (error) => {
  if (error) throw err;
  console.log("dossier créer avec succès");
});
