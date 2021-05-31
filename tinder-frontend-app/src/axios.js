import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backendapp-clone.herokuapp.com'
})

export default instance