import { SessionProvider } from 'next-auth/react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { CookiesProvider } from 'react-cookie'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import AppLayout from '@layouts/AppLayout'
import reactQueryClient from '@middlewares/reactQueryClient'
import { theme } from '@styles/theme'

function App({
  Component,
  pageProps,
}: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <QueryClientProvider client={reactQueryClient}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <AppLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CookiesProvider>
    </QueryClientProvider>
  )
}

const AppWithI18n = appWithTranslation(App)

const AppWithAuth = (props) => {
  const { pageProps } = props

  return (
    <SessionProvider session={pageProps.session}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AppWithI18n {...props} />
    </SessionProvider>
  )
}

export default AppWithAuth
