import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://rapapi.org/mockjsdata/22191/'
})

export const getRequest = (url) => (
  instance.get(url)
)

export const postRequest = (url, data) => (
  instance.post(url, data)
)

export const getUsers = () => getRequest('users.api')
export const getImages = () => getRequest('images.api')
