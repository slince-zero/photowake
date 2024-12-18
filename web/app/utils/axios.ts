import axios from 'axios'

const api = axios.create({
  // 本地
  // baseURL: process.env.NEXT_PUBLIC_API_URL_DEV,
  // 线上
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
})

export default api
