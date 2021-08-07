const fs = require('fs');
const JSONdata = require('./data.json');
const argvCommand = process.argv[2];
const argvThird = process.argv[3];

if (argvCommand === 'read') {
  for (const key in JSONdata.notes) {
    console.log(key + ':', JSONdata.notes[key]);
  }
} else if (argvCommand === 'create') {
  JSONdata.notes[JSONdata.nextId] = argvThird;
  JSONdata.nextId++;
} else if (argvCommand === 'delete') {
  delete JSONdata.notes[argvThird];
} else if (argvCommand === 'update') {
  JSONdata.notes[argvThird] = process.argv[4];
}

const newData = JSON.stringify(JSONdata, null, 2);
fs.writeFile('data.json', newData, 'utf8', err => {
  if (err) throw err;
});
