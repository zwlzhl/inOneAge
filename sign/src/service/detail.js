import fly from '@/utils/request';

//获取详情
export let getDetail = (params) => {
    return fly.get("/sign/"+params.id)
} 

//更新面试信息
export function upDataInofo(payload) {
    return fly.put("/sign/"+payload.id, payload.params)
}