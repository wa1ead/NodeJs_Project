const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

var welcome = fs.readFile("welcome.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
