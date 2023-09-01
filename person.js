class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My first name is ${this.name}`;
  }
}

module.exports = {
  Person,
};
