import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://m.jandou.com/file/script/'
})

export const getRequest = (url) => (
  instance.get(url)
)

export const postRequest = (url, data) => (
  instance.post(url, data)
)