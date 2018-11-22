import request from '@/utils/request'

export function getList(obj) {
	console.log(obj)
  return request({
    url: '/tCategoryItem/all',
    method: 'post',
	  data:obj
  })
}
	