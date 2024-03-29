const express = require('express')
const _ = require('lodash')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello world!'
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})