// const prenom = require("./peoples"); require pour un seul export

const peoples = require("./peoples");

console.log(peoples);

console.log(peoples.prenom);
console.log(peoples.etudiant);
console.log(peoples.array);
console.log(peoples.printInfo(peoples.etudiant));
