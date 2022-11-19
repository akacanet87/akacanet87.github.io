import { Cookies } from 'react-cookie'

const reactCookies = new Cookies()

export const setCookie = (name: string, value: string, option?: any) => {
  return reactCookies.set(name, value, { ...option })
}

export const getCookie = (name: string) => {
  return reactCookies.get(name)
}