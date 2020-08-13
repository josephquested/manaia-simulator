const fs = require('fs')
const writeData = require('./writeData.js')
let data = require('./data.json')
let backup = require('./data-backup.json')

const increaseIKE = (amount, cb) => {
    let ikeTotal = parseInt(data.ikeTotal, 10);
    ikeTotal += amount
    data.ikeTotal = ikeTotal
    data.day++
    decayStudents(data.students);
    writeData(data, cb)
}

const decreaseIKE = (amount, cb) => {
    data.ikeTotal -= amount
    writeData(data, cb)
}

const increaseStat = (stat, id, cb) => {
    data.students[id][stat] += 10
    writeData(data, cb)
}

const reset = (cb) => {
    data.students.forEach((student, i) => {
        let keys = Object.keys(student)
        keys.forEach(key => {
            student[key] = backup.students[i][key]
        })
    })

    data.ikeTotal = backup.ikeTotal
    data.day = backup.day

    writeData(data, cb)
}


// -- UTIL -- //

const decayStudents = (students) => {
    students.forEach((student) => {
        let keys = Object.keys(student)
        keys.forEach(key => {
            if (key != 'name')
            student[key] -= random()
        })
        preventNegative(student)
    })
}

const preventNegative = (student) => {
    let keys = Object.keys(student)
    keys.forEach((key) => {
        if (student[key] < 0 && key != 'name')
            student[key] = 0
    })
}

const random = () => {
    const difficulty = 2;
    return Math.floor(Math.random() * difficulty) 
}

module.exports = { increaseIKE, decreaseIKE, reset, increaseStat }