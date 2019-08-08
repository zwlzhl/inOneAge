import fly from '@/utils/request';

export let getDetail = (params) => {
    return fly.get("/sign/"+params.id)
}