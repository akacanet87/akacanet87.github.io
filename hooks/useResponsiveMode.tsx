import withResponsiveMode from '@/utils/responsiveMode'
import {
  useEffect,
  useState,
} from 'react'

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