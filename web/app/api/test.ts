import api from '@/app/utils/axios'

export const getTest = async () => {
  const response = await api.get('/test')
  return response.data
}
