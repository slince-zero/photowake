import api from '@/app/utils/axios'
import { cookies } from 'next/headers'

export const getAllUsers = async () => {
  const response = await api.get('/users', {
    headers: {
      Cookie: cookies.toString(),
    },
  })
  console.log(response, 'res')

  return response.data
}
