import fly from '@/utils/request';

// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}

// 添加面试
export let addSign = params => {
  return fly.post('/sign', params);
}
// 获取面试列表
export let sign = (params) => {
  return fly.get('/sign', params)
}
export let signCont = () => {
  return fly.get('/sign')
}
//获取面试详情
export let signDetail = params => {
  return fly.get(`/sign/${params}`)
}
//更新面试
export let updateSign = params => {
  let { id } = params;
  delete params.id
  return fly.put(`/sign/${id}`, params)
}







