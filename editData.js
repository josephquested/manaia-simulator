const fs = require('fs')
const writeData = require('./writeData.js')
let data = require('./data.json')
let backup = require('./data-backup.json')

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

const reset = (cb) => {
    data.students.forEach((student, i) => {
        student = backup.students[i]
    })

    data.ikeTotal = backup.ikeTotal
    data.day = backup.day

    writeData(data, cb)
}

module.exports = { increaseIKE, decreaseIKE, reset }