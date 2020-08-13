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
        student.hunger = backup.students[i].hunger
        student.thirst = backup.students[i].thirst
        student.fatigue = backup.students[i].fatigue
        student.whelm = backup.students[i].whelm
    })

    data.ikeTotal = backup.ikeTotal
    data.day = backup.day

    writeData(data, cb)
}


// -- UTIL -- //

const decayStudents = (students) => {
    students.forEach((student) => {
        student.hunger -= random()
        student.thirst -= random()
        student.fatigue -= random()
        student.whelm -= random()
    })
}

const random = () => {
    const difficulty = 3;
    return Math.floor(Math.random() * difficulty) 
}

module.exports = { increaseIKE, decreaseIKE, reset, increaseStat }