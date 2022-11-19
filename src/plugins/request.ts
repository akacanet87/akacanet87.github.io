import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import isNil from 'lodash/isNil'

import axios from '@plugins/axios'
import { getStorageData } from '@plugins/cookies'
import { AUTH_TOKEN } from '@utils/constants/constKeys'

// Axios Initialization
axios.defaults.headers.common['Content-Type'] = 'application/json'

export function serviceApi(path: string) {
  const newPath = path[0] !== '/' ? `/${path}` : path
  return `${process.env.API_PATH}${newPath}`
}

export function getAuthToken() {
  return getStorageData(AUTH_TOKEN)
}

export function get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const headers: AxiosRequestHeaders = { ...options?.headers }
    headers.Authorization = getAuthToken()
    axios
      .get<T>(serviceApi(url), { ...options, headers })
      .then((result) => {
        if (!isNil(result.data)) {
          resolve(result.data)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function post<T, R>(url: string, body: R, options?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const headers: AxiosRequestHeaders = { ...options?.headers }
    headers.Authorization = getAuthToken()
    axios
      .post<T>(serviceApi(url), body, { ...options, headers })
      .then((result) => {
        if (!isNil(result.data)) {
          resolve(result.data)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function put<T, R>(url: string, body: R, options?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const headers: AxiosRequestHeaders = { ...options?.headers }
    headers.Authorization = getAuthToken()
    axios
      .put<T>(serviceApi(url), body, { ...options, headers })
      .then((result) => {
        if (!isNil(result.data)) {
          resolve(result.data)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function patch<T, R>(url: string, body: R, options?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const headers: AxiosRequestHeaders = { ...options?.headers }
    headers.Authorization = getAuthToken()
    axios
      .patch<T>(serviceApi(url), body, { ...options, headers })
      .then((result) => {
        if (!isNil(result.data)) {
          resolve(result.data)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteR<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const headers: AxiosRequestHeaders = { ...options?.headers }
    headers.Authorization = getAuthToken()
    axios
      .delete<T>(serviceApi(url), { ...options, headers })
      .then((result) => {
        if (result.data) {
          resolve(result.data)
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ error: { message: 'empty' } })
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default { get, post, put, patch, deleteR }
