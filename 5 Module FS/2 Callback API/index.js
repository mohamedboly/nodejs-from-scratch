import * as fs from "fs";

// fs.mkdir("dossierCreerAvecCallBackApi", (error) => {
//   if (error) throw error;
//   console.log("dossier créer avec succès");
// });
// fs.mkdir("nomdoddieracreer", function (err) {
//   if (err) {
//     console.log("une erreur est surevnue");
//     console.log(err);
//     throw err;
//   }
//   console.log("dossier créer avec succès");
// });
// fs.mkdir("dossierTestCallback", (error) => {
//   if (error) {
//     console.log("une erreur est survenue");
//     console.log(error);
//   }
// });

fs.rmdir("nomDossierASupprimer", function (err) {
  if (err) {
    console.log("une erreur est surevnu");
    console.log(err);
  } else {
    console.log("opération réussie");
  }
});

// fs.rmdir("dossierTestCallback", function (error) {
//   if (error) {
//     console.log("Une erreur est survenue");
//     console.log(error);
//   }
// });
