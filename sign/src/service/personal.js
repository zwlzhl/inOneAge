import fly from '@/utils/request';

//解密数据
export function getDecrpyt(params) {
	return fly.post("/user/decrypt", params)
}

//更新手机号
export function updatePhone(params) {
	return fly.post("/user/updatePhone", params)
}
