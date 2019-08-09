import fly from '@/utils/request';

export function getDecrpyt(params) {
    return fly.post("/user/decrypt", params)
}