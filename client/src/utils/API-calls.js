import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_URL
const API_BASE_URL = 'http://localhost:8000'

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
    }
})

export const register = async (data) => api.post('/register', data)
export const login = async (data) => api.post('/login', data)
export const editAPI = async (data) => api.put('/edit', data)
export const deleteAPI = async () => api.delete('/delete')
export const getTasksAPI = async () => api.get('/')