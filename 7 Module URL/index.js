import { URL } from "url";
const url = new URL(
  "https://www.example.com:8080/p/a/t/h?query=string&aa=string2#hash"
);
console.log("hash de l'url ");
console.log(url.hash);
console.log("host de l'url");
console.log(url.hostname);
console.log("port de l'url");
console.log(url.port);
console.log("href de l'url");
console.log(url.href);
console.log("protocole de l'url");
console.log(url.protocol);
console.log("parametre de l'url");
console.log(url.search);
console.log("Avoir les parametre sous forme d'un objet");
console.log(url.searchParams);
console.log("Traduire l'url en chaine de caractère");
console.log(url.toJSON());
console.log(url.toString());
