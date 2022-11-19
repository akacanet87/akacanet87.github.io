import {
  useEffect,
  useState,
} from 'react'

import withResponsiveMode from '@utils/responsiveMode'

function useResponsiveMode() {
  const responsiveMode = withResponsiveMode()
  const [isMobileWidth, setIsMobileWidth] = useState(false)

  useEffect(() => {
    setIsMobileWidth(responsiveMode.isMobileWidth)
  }, [])

  return {
    isMobileWidth,
  }
}

export default useResponsiveMode
