const express = require('express')
const router = express.Router()

let data = require("./data.json")

router.get('/', function (req, res) {
    res.render('home', data)
})

module.exports = router