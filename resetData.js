const fs = require('fs')
const backup = require('./data-backup.json')

const reset = (cb) => {

    let dataStr = JSON.stringify(backup);

    fs.writeFile('./data.json', dataStr, (err) => {

        if (err)
            throw err

        cb()
    })
}

module.exports = reset