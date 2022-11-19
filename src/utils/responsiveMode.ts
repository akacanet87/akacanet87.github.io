import throttle from 'lodash/throttle'
import {
  useContext,
  useEffect,
  useState,
} from 'react'

import { ResponsiveContext } from '@styles/theme'

export const RESPONSIVE_MODE = Object.freeze({
  MOBILE: 1,
  TABLET_MINI: 10,
  TABLET_BIG: 100,
  PC: 1000,
})

function getResponsiveMode(responsive) {
  if (typeof window === 'undefined') {
    return {
      mode: RESPONSIVE_MODE.PC,
      isMobileWidth: false,
    }
  }
  if (window.innerWidth <= responsive.mobile) {
    return {
      mode: RESPONSIVE_MODE.MOBILE,
      isMobileWidth: true,
    }
  }

  if (window.innerWidth <= responsive.tabletMini) {
    return {
      mode: RESPONSIVE_MODE.TABLET_MINI,
      isMobileWidth: true,
    }
  }

  if (window.innerWidth <= responsive.tabletBig) {
    return {
      mode: RESPONSIVE_MODE.TABLET_BIG,
      isMobileWidth: false,
    }
  }

  return {
    mode: RESPONSIVE_MODE.PC,
    isMobileWidth: false,
  }
}

function withResponsiveMode() {
  const responsiveContext = useContext(ResponsiveContext)
  const [responsiveMode, setResponsiveMode] = useState(getResponsiveMode(responsiveContext.width))

  useEffect(() => {
    const updateWindowDimensions = throttle(function () {
      setResponsiveMode(getResponsiveMode(responsiveContext.width))
    }, 200)

    window.addEventListener('resize', updateWindowDimensions)
    updateWindowDimensions()

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  return responsiveMode
}


export default withResponsiveMode
