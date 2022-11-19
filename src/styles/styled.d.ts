import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      warning: string
      info: string
      error: string
      white: string
      black01: string
      black02: string
      black03: string
      black04: string
      black05: string
      black06: string
      black07: string
      black08: string
      black09: string
      black10: string
      transparent: string
    }
    device: {
      pc: string
      tab: string
      mobile: string
    }
    font: {
      Spoqa: string
      Astounder: string
      Abhaya: string
      AppleSD: string
      NotoKr: string
      Roboto: string
    }
  }
}
