const express = require('express')
const router = express.Router()
const editData = require('./editData')
const resetData = require('./resetData')

let data = require("./data.json")

// -- GET -- //

router.get('/', (req, res) => {
    res.render('home', data)
})

// -- POST -- //

router.post('/bank', (req, res) => {
    let ikeMined = Object.keys(req.body)[0]
    let ikeNum = parseInt(ikeMined, 10);

    console.log("IKE MINED:" + ikeNum)

    editData.increaseIKE(ikeNum, () => {
        console.log(`${ikeNum} added to the bank`)
        res.redirect('/')
    })
})

router.post('/reset', (req, res) => {

    console.log('reset in server')

    resetData(() => {
        console.log("RESET DATA")
        res.redirect('/')
    })
})

module.exports = router