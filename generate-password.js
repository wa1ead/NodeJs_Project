const { generate } = require("generate-password");

var password = generate({
  length: 10,
  numbers: true,
  symbols: true,
});

console.log(password);
