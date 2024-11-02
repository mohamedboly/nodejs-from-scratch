import fs from "fs/promises";

try {
  await fs.mkdir("dossierTest5");
  await fs.rmdir("dossierTest5");
} catch (error) {
  console.log("Une erreur est survenu");
  console.log(err);
}
