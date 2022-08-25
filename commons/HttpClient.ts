import axios from 'axios';

axios.defaults.baseURL = 'http://20.103.115.63/alfred-api';
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'


export const setAuthToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getRequest = async <T>(path: string): Promise<T> => {
  const response = await axios.get(path);
  return response.data
}

export const postRequest = async <T>(path: string, body?: any): Promise<T> => {
  const response = await axios.post(path, body);
  return response.data
}

export const putRequest = async <T>(path: string, body?: any): Promise<T> => {
  const response = await axios.put(path, body)
  return response.data
}

export const deleteRequest = async <T>(path: string): Promise<T> => {
  const response = await axios.delete(path)
  return response.data
}
