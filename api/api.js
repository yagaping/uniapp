import http from './http.js'

// 医院列表接口
export const hospitalList = data => {
	return http('/hospital/list')
}