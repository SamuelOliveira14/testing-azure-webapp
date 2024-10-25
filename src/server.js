import express from 'express'
import mid from './mid.js'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`)
})

app.get('/', mid, (req, res) => {
    res.status(200).send('Hello, world!')
})

app.get('/about', async (req, res) => {
    
    let response = null
    try{
        response = await axios.get('https://graph.microsoft.com/v1.0/me')
    }catch(error){
        response = {data: 'Unauthorized'}
    }
    
    res.status(200).json({
        message: 'This is the about page',
        content: response.data || 'NO CONTENT --'
    })
})