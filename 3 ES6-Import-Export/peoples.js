// Dans fichier people.js qui expose ses compoasnts
const prenom = "Moussa";
const age = 20;

// Debut export Node js
module.exports = prenom; // Exposer un seul composant

module.exports = { prenom, age }; // Expose plusieurs composants

// Fin export node js

// Debut ES6

export default prenom; // exposer un seul composant

export { prenom, age }; // exposer un seul compoasnt
