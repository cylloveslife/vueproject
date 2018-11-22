import request from '@/utils/request'

export function getList(obj) {
	console.log(obj)
  return request({
    url: '/sysUser/all',
    method: 'post',
	  data:obj
  })
}
	