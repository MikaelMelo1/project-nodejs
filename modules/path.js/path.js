const path = require("path");

//only name of documnt
console.log(path.basename(__filename));

//name of direction
console.log(path.dirname(__filename));

//extension of document
console.log(path.extname(__filename));

//create object path
console.log(path.parse(__filename));

//together way of documentos
console.log(path.join(__dirname));

console.log(path.join(__dirname, "teste", "teste.html"));
