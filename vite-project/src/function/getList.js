
// import http from '../core/services/interceptore'

import apiClient from "../core/services/interceptor"

const getList =async(url) => {
    const res = await apiClient.get(url)
    return res
}

export {getList}