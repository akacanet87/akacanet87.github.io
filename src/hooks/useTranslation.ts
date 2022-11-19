import { useTranslation as useNextTranslation } from 'next-i18next'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation as useReactTranslation } from 'react-i18next'

function useTranslation() {
  const { ready: isReadyNext, ...nextProps } = useNextTranslation()
  const { ready: isReactReady, ...reactProps } = useReactTranslation()

  if (isReadyNext) {
    return { ready: isReadyNext, ...nextProps }
  } 
    return { ready: isReactReady, ...reactProps }
  

}

export default useTranslation
