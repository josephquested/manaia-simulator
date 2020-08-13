const fs = require(fs)
let data = require('./data.json')

const increaseIKE = (amount) => {
    data.ikeTotal += amount
    data.day++
    writeData(data)
}

const decreaseIKE = (amount) => {
    data.ikeTotal -= amount
    writeData(data)
}

const writeData = (data) => {
    const str = JSON.stringify(data)
    fs.writeFile('./data.json', str, (err) => {
        if (err)
            throw (err)
    })
}

module.exports = { increaseIKE, decreaseIKE }