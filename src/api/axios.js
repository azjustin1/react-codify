import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://gymmerify-nodejs-api.herokuapp.com',
})

export default instance