const fs = require(`fs`);
const path = require("path");
const csvParser = require("csv-parser");

function csv2json(pathName) {
  const result = [];
  fs.createReadStream(pathName)
    .pipe(csvParser())
    .on("data", (data) => result.push(data))
    .on("end", () => {
      fs.writeFile(path.resolve("data.json"), JSON.stringify(result), (err) => {
        if (err) console.log(err);
      });
    })
    .on("error", (error) => {
      console.log(error);
    });
}

csv2json(path.resolve("data.csv"));
