const fs = require('fs')
let data = require('./data.json')

const increaseIKE = (amount, cb) => {
    let ikeTotal = parseInt(data.ikeTotal, 10);
    ikeTotal += amount
    data.ikeTotal = ikeTotal
    data.day++
    writeData(data, cb)
}

const decreaseIKE = (amount, cb) => {
    data.ikeTotal -= amount
    writeData(data, cb)
}

const writeData = (data, cb) => {
    const str = JSON.stringify(data)
    fs.writeFile('./data.json', str, (err) => {

        if (err)
            throw (err)

        cb();
    })
}

module.exports = { increaseIKE, decreaseIKE }