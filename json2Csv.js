const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

function json2csv(pathname) {
  fs.readFile(pathname, "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const jsonToCsv = new Parser();
      const data = jsonToCsv.parse(JSON.parse(result));
      fs.writeFile(path.resolve("data.csv"), data, (err) => {
        console.log(err);
      });
    }
  });
}
json2csv(path.resolve("data.json"));
