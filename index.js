const express = require('express')
var jwt = require('jsonwebtoken')
const _ = require('lodash')
const cors = require('cors')

const app = express()
const port = 3000
const SECRET = 'secret'

// testing endpoints
app.get('/', (req, res) => {
    res.json({
        msg: 'Hello world!'
    })
})

// configuring the app
app.use(express.json())
app.use(cors())

// setting routes
const AuthRouter = express.Router()

// to sign up
const users = [
    {
        id: 0,
        username: 'admin',
        password: 'admin'
    }
]

AuthRouter.post('/signup', async (req, res) => {
    let token = ''

    token = jwt.sign({ user: 'douglas'}, SECRET, { expiresIn: '1h' })

    let decoded = jwt.verify(token, SECRET);
    console.log({decoded})

    res.json({
        token
    })
})

// to sign in
function signin({username, password}){
    // check if user exists
    // check if password is equal
    
}
AuthRouter.post('/signin', async (req, res) => {
    const token = ''



    res.json({
        token
    })
})


app.use(AuthRouter)

// running the app
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})