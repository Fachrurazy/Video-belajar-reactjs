import { create } from 'zustand'
import axios  from 'axios'

const userStore = create ((set) => ({
  listusers: [],
  getApiUsers: async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + '/users')
      set({ listusers: res.data })
    } catch (err) {
      console.error("Error in data fetch:", err)
    }
  },
  setApiUsers: async () => {
    try { 
      const res = await axios.put(import.meta.env.VITE_API_URL + '/users')
      set({ listusers: res.data }) 
    } catch (err) {
      console.error("Error in post data:", err)
  }
  },
  getIDusers: async (id) => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + `/users/${id}`)
      set({ listusers: res.data })
    } catch (err) {
      console.error("Error in data fetch ID:", err)
    }
  }
}))

export default userStore;