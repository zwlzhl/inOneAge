import fly from '@/utils/request';

//面试列表数据
export let getSign = (params) => {
	return fly.get("/sign?status="+params.status)
}
