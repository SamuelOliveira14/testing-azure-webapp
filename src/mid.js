import axios from "axios"
export default async (req, res, next) => {
    //await axios.get('https://jsonplaceholder.typicode.com/posts')

    console.log('Request received:', req.method, req.url)
    next()
}