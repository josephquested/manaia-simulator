const express = require('express')
const router = express.Router()
const editData = require('./editData')

let data = require("./data.json")

// -- GET -- //

router.get('/', (req, res) => {
    res.render('home', data)
})

// -- POST -- //

router.post('/bank', (req, res) => {
    let ikeMined = Object.keys(req.body)[0]
    let ikeNum = parseInt(ikeMined, 10);

    console.log("IKE MINED: " + ikeNum)

    editData.increaseIKE(ikeNum, () => {
        console.log(`${ikeNum} IKE ADDED TO THE BANK`)
        res.redirect('/')
    })
})

router.post('/stat', (req, res) => {
    let stat = req.query.stat
    let id = req.query.id

    console.log(`INCREASING ${stat} for ${id}`)

    editData.decreaseIKE(10, () => {
        console.log("SPENT 10 IKE")
        editData.increaseStat(stat, id, (() => {
            console.log(`SUCCESS ${stat} for ${id}`)
            res.redirect('/')
        }))
    })
})


router.post('/reset', (req, res) => {
    editData.reset(() => {
        console.log("RESET DATA")
        res.redirect('/')
    })
})

module.exports = router