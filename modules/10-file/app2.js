const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error)

  //writing a file
  fs.writeFile('./file.txt', 'Hello, Dream Conders')
  .catch(console.error);
  fs.appendFile('./file.txt', 'dfsa, Dream Conders')
  .catch(console.error);

  fs.copyFile()

  // folder
  fs.mkdir('sub-folder')
  .catch(console.error)

  fs.readdir('./')
  .then(console.log)
  .then(console.error)