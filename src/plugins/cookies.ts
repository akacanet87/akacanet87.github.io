import { Cookies } from 'react-cookie'

const reactCookies = new Cookies()

export const setStorageData = (name: string, value: string, option?: any) => {
  return reactCookies.set(name, value, { ...option })
}

export const getStorageData = (name: string) => {
  return reactCookies.get(name)
}
