import path from "path";

const pathName = "c:\\muy\\index.html";
console.log(path.basename(pathName));
console.log(path.dirname(pathName));
console.log(path.extname(pathName));

//on peut généer un path avec path.join
console.log(path.join("c:", "dossierParent", "dossierEnfant", "fichier.txt"));

//path.normalize permet de normaliser un chemin
console.log(path.normalize("C:\\\\dossier1//dossier2\\dossier3"));
