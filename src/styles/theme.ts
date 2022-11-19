import { createContext } from 'react'
import { DefaultTheme } from 'styled-components'

export const responsive = {
  width: {
    iphone4: 320,
    iphoneSE: 375,
    mobile: 480,
    tabletMini: 768,
    tabletBig: 1024,
    pc: 1440,
  },
  headerWidth: {
    pc: 1200,
  },
  headerHeight: {
    mobile: 0,
    tabletMini: 0,
    tabletBig: 171,
    pc: 121,
  },
}

const size = {
  pc: responsive.width.pc,
  tab: responsive.width.tabletMini,
  mobile: responsive.width.mobile,
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#BDFF00',
    secondary: '#0038FF',
    warning: '#FF7A27',
    info: '#69FAFF',
    error: '#E72227',
    white: '#FFFFFF',
    black01: '#F7F7F7',
    black02: '#E7E7E7',
    black03: '#C7C7C7',
    black04: '#A7A7A7',
    black05: '#979797',
    black06: '#777777',
    black07: '#575757',
    black08: '#373737',
    black09: '#171717',
    black10: '#070707',
    transparent: 'transparent',
  },
  device: {
    pc: `${size.pc}px`,
    tab: `${size.tab}px`,
    mobile: `${size.mobile}px`,
  },
  font: {
    Spoqa: '"Spoqa Han Sans Neo", sans-serif',
    Astounder: '"astounder-squared-bb", sans-serif',
    Abhaya: '"Abhaya Libre", sans-serif',
    AppleSD: '"Apple SD Gothic", sans-serif',
    NotoKr: '"Noto Sans", "Noto Sans CJK KR", sans-serif',
    Roboto: '"Roboto", sans-serif',
  }
}

export const mediaWidth = {
  mobile: `(max-width: ${size.mobile}px)`,
  tab: `(max-width: ${size.tab}px)`,
  pc: `(max-width: ${size.pc}px)`,
}

export const deviceWidth = {
  mobile: `${size.mobile}px`,
  tab: `${size.tab}px`,
  pc: `${size.pc}px`,
}

export const ResponsiveContext = createContext(responsive)
