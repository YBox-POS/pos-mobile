import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://www.mocky.io/v2/'
})

export const getRequest = (url) => (
  instance.get(url)
)

export const postRequest = (url, data) => (
  instance.post(url, data)
)

export const getUsers = () => getRequest('595d9bce100000a8007c1749')
