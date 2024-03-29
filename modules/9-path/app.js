const path = require('path');

console.log(__dirname);
console.log(__filename);


console.log(path.sep);
console.log(path.delimiter)

//basename

console.log(path.basename(__filename))
console.log(path.basename(__filename), 'js')

//dirname
console.log(path.dirname(__filename))

//extension
console.log(path.extname(__filename))

const parsed = path.parse(__filename)
console.log(parsed);

const str = path.format(parsed)
console.log(str)

console.log(path.normalize('./folder/////sub'));

console.log(__dirname + '/' + 'image')