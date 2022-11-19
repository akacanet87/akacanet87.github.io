import { useQuery } from 'react-query'

import {
  GET_USER,
  POST_USER,
} from '@services/user/keys'
// import { get } from '@plugins/request'

export const useGetUser = () => {
  useQuery(
    [GET_USER],
    async (): Promise<any> => {
      // const response = await get('auth/user')
    }
  )
}

export const usePostUser = () => {
  useQuery(
    [POST_USER],
    async (): Promise<any> => {
      // const response = await get('auth/user')
    }
  )
}
