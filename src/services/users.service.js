import axios from "axios"

export const getUsers = (callback) => {
    axios.get(import.meta.env.VITE_API_URL + '/users')
    .then((res) => {
        callback(res.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}
export const postUsers = (data) => {
    axios.post(import.meta.env.VITE_API_URL + '/users', data)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

