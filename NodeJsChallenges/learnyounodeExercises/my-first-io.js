const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]);

// const str = buf.toString();

const lines = contents.toString().split('\n').length - 1

console.log(lines)