import * as fs from "fs";

// fs.mkdir("dossierCreerAvecCallBackApi", (error) => {
//   if (error) throw err;
//   console.log("dossier créer avec succès");
// });
// fs.mkdir("dossierTestCallback", (error) => {
//   if (error) {
//     console.log("une erreur est survenue");
//     console.log(error);
//   }
// });

fs.rmdir("dossierTestCallback", (error) => {
  if (error) {
    console.log("une erreur est survenue");
    console.log(error);
  }
});

fs.rmdir("dossierTestCallback", function (error) {
  if (error) {
    console.log("Une erreur est survenue");
    console.log(error);
  }
});
