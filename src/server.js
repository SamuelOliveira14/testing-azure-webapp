import express from 'express'
import mid from './mid.js'

const app = express()
const PORT = 8080

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