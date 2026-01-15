import Mock from "mockjs"

Mock.mock(/api\/hospital\/list/,'get',function(){
	return {
		code:0,
		data:[
			{id:1},
			{id:2}
		]
	}
})