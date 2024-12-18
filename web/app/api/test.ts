import api from '@/app/utils/axios'

export const getTest = async () => {
  const response = await api.get('')
  return response.data
}
