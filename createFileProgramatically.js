const fs = require("fs");
const path = require("path");

function checkIfNotCreate(pathName) {
  fs.access(pathName, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File Does Not exist, File is being created`);
      fs.writeFile(pathName, "File", "utf-8", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`File has been created`);
        }
      });
    } else {
      console.log("File exists");
    }
  });
}

checkIfNotCreate(path.resolve("data2.txt"));

module.exports = { checkIfNotCreate };
