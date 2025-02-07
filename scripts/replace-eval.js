const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../node_modules/three-stdlib/libs/lottie.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const result = data.replace(/eval/g, 'console.log');

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Successfully replaced eval in lottie.js');
    }
  });
});