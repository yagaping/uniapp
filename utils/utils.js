export const sleep = (t = 1) => {
	t = t * 1000
	return new Promise((reslove,reject)=>{
		setTimeout(()=>{
			reslove()
		},t)
	})
}