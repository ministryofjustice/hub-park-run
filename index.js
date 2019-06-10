const fs = require('fs');
const Mustache = require("mustache")
const parkRunData = require('./data/parkRunData.json')
const template = require('./htmlTemplate')
const result = Mustache.render(template, parkRunData)

//create a file named suoernigel.txt:
fs.writeFile('ParkRunResults.html', result , function (err) {
  if (err) throw err;
  console.log('Saved!');
});
