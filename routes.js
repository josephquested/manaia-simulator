const express = require('express')
const router = express.Router()

let data = require("./data.json")

// -- GET -- //

router.get('/', (req, res) => {
    res.render('home', data)
})


router.get('/bank', (req, res) => {

    console.log(req.body)

    res.render('home', data)
})


// -- POST -- //

router.post('/bank', (req, res) => {

    let ikeMined = Object.keys(req.body)[0]

    console.log("IKE MINED:" + ikeMined)
    res.redirect('/')
})

module.exports = router