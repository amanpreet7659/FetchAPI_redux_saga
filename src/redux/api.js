import axios from "axios"

export const localApi = async (args)=>{
    // await axios.get('https://dev.magnifi.com/api/violator')
    await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
}