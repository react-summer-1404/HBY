// import { useQuery } from 'react-query'
import { useQuery } from '@tanstack/react-query'
import {getList} from '../../function/getList'
import {onSuccess , onError} from '../../function/onSitu'



const CustomGetUseQueryExtra = (key , url) =>{



    return useQuery(key , ()=>getList(url))


}

export {CustomGetUseQueryExtra}