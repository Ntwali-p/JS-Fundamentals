const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('No arguments');
} else if (args.length === 1) {
  console.log('Argument found');
}else {
  console.log('Arguments found');
}
const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});