const fs = require("fs");
const Mustache = require("mustache");
const mkdirp = require("mkdirp");
const parkRunData = require("./data/parkRunData.json");
const template = require("./htmlTemplate");
const result = Mustache.render(template, parkRunData);

mkdirp("./data", () => {
  fs.writeFile("./data/ParkRunResults.html", result, function(err) {
    if (err) throw err;
    console.log("Saved file at ./data/ParkRunResults.html");
  });
});
