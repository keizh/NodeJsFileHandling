const fs = require("fs");
const path = require("path");

function errorLogger(message) {
  fs.appendFile(
    path.join(__dirname, "ffolder", "sample4.txt"),
    `${new Date().toISOString()} ${message} \n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}

errorLogger("is this working");

exports.module = { errorLogger };
