const { Person } = require("./person");
require("./modules/path.js");

const pessoa = new Person("Mikael Melo");

console.log(pessoa.sayMyName());
