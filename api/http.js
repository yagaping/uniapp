const baseUrl = "http://localhost:5173/api"
const http = (url, data = {}, method="GET") => {
	return new Promise((reslove,reject)=>{
		uni.request({
			url:baseUrl+url,
			method,
			data,
			timeout:10000,
			success:res=>{
				if(res.statusCode === 200){
					reslove(res.data)
				}else{
					reject(res.errMsg)
				}
			},
			fail:err=>{
				console.log('请求接口失败',err)
				reject(err)
			}
		})
	})
}

export default http;