const fs = require('fs')

const data = {
  count: 'i am data generated from the prebuild',
  name: 'jason',
  cool: true,
  age: 99
}

fs.writeFileSync('prebuilddata.json', JSON.stringify(data, null, 2))