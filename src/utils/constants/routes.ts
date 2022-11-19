export const ROUTE_KEYS = {
  HOME: '',
  AUTH: 'auth',
  MY_PAGE: 'mypage',
  ACCOUNT: 'account',
  SIGN_UP: 'signup',
  LOGIN: 'login',
  EVENT: 'event',
  MAP: 'map',
}

export const PAGE_PATH = {
  HOME: `/${ROUTE_KEYS.HOME}`,
  MY_PAGE: `/${ROUTE_KEYS.MY_PAGE}`,
  MY_PAGE_ACCOUNT: `/${ROUTE_KEYS.MY_PAGE}/${ROUTE_KEYS.ACCOUNT}`,
  SIGN_UP: `/${ROUTE_KEYS.AUTH}/${ROUTE_KEYS.SIGN_UP}`,
  LOGIN: `/${ROUTE_KEYS.AUTH}/${ROUTE_KEYS.LOGIN}`,
  EVENT: `/${ROUTE_KEYS.EVENT}`,
  EVENT_DETAIL: `/${ROUTE_KEYS.EVENT}/[id]`,
  MAP: `/${ROUTE_KEYS.MAP}`,
}
