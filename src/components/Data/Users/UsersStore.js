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
  setApiUsers: async (payload) => {
    try { 
      const res = await axios.put(import.meta.env.VITE_API_URL + `/users/${payload.id}`,
        payload)
      set((state) => ({
        listusers: state.listusers.map(user =>
            user.id === payload.id ? res.data : user
        )
    })) 
    } catch (err) {
      console.error("Error in updating data:", err)
  }
  },
  deleteApiUsers: async (id) => {
    try{
      await axios.delete(import.meta.env.VITE_API_URL + `/users/${id}`)
      set((state) => ({
        listusers: state.listusers.filter((user) => user.id !== id)
    }))
    } catch (err) {
      console.error("Error in deleting data:", err)
    }
  },
  createApiUsers: async (payload) => {
    try{
      const res = await axios.post(import.meta.env.VITE_API_URL + '/users', payload)
      set((state) => ({
        listusers: [...state.listusers, res.data]
    }))
    } catch (err) {
      console.error("Error in creating data:", err)
    }
  }
}))

export default userStore;