const fs = require('fs')

const writeData = (data, cb) => {
    const str = JSON.stringify(data)
    fs.writeFile('./data.json', str, (err) => {

        if (err)
            throw (err)

        cb();
    })
}

module.exports = writeData