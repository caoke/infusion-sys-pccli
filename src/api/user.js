import request from '@/utils/request'
import axios from 'axios'

export function login(data) {
  const url = `/jeecg/rest/tokens?username=${data.username}&password=${data.password}`
  return axios.post(url).then(res => {
    return res.data
  })
}

export function getInfo(data) {
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
