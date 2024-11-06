const fs = require(`fs`);
const path = require(`path`);

function deleteFolder(directoryPath, day) {
  fs.readdir(directoryPath, (err, files) => {
    files.forEach((file) => {
      fs.stat(path.join(directoryPath, file), (err, stats) => {
        if (err) {
          console.log(err);
        } else {
          const fileBeFore = new Date(Date.now() - day * 24 * 60 * 60 * 1000);
          if (fileBeFore > stats.mtimeMs) {
            fs.unlink(path.join(directoryPath, file), (err) => {
              if (err) console.log(err);
              else {
                console.log(`File deleted`);
              }
            });
          }
        }
      });
    });
  });
}

deleteFolder(path.resolve("ffolder"), 30);
