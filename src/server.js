import express from 'express'
import mid from './mid.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`)
})

app.get('/', mid, (req, res) => {
    res.status(200).send('Hello, world!')
})

app.get('/about', (req, res) => {
    res.status(200).json({
        message: 'This is the about page'
    })
})