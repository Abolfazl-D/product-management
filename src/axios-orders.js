import axios from "axios"

const instance = axios.create({
    baseURL: 'https://react-reducx-main-default-rtdb.firebaseio.com/'
})

export default instance