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

    console.log("IKE MINED:" + ikeNum)

    editData.increaseIKE(ikeNum, () => {
        console.log(`${ikeNum} added to the bank`)
        res.redirect('/')
    })
})

module.exports = router