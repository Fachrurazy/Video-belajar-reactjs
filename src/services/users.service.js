import axios from "axios"

export const getUsers = () => {
    axios.get('https://672b2a87976a834dd025e2b8.mockapi.io/api/v1/users')
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}