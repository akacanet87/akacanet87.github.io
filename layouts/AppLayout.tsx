import React, { useEffect } from 'react'
import { CookiesProvider } from 'react-cookie'
import { QueryClientProvider } from 'react-query'
import styled, { ThemeProvider } from 'styled-components'
import reactQueryClient from '@/middlewares/reactQueryClient'
import { GlobalStyle } from '@/styles/global-style'
import { theme } from '@/styles/theme'
import PageWrapper from '@/components/Common/PageWrapper'
import Header from '@/components/Common/Header'

interface AppLayoutProps {
  children: React.ReactNode
}

/* eslint-disable no-console */
// console.log('Version: ', process.env.GIT_VERSION_HASH)
console.log(
  '%cFoovengers',
  `
  font-family: sans-serif;
  color: #FFF;
  font-weight: bold;
  font-size: 60px;
  // text-shadow: 2px 2px 0 #eee, 4px 4px 0 #585858;
`,
)

/* eslint-enable no-console */

function AppLayout({ children }: AppLayoutProps) {
  useEffect(function onAppMounted() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <QueryClientProvider client={reactQueryClient}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <AppLayoutWrapper>
            <GlobalStyle />
            <Header />
            <PageWrapper>
              {children}
            </PageWrapper>
          </AppLayoutWrapper>
        </ThemeProvider>
      </CookiesProvider>
    </QueryClientProvider>
  )
}

const AppLayoutWrapper = styled.div`
  padding: calc(constant(safe-area-inset-top)) 0 0 0;
  padding: calc(env(safe-area-inset-top)) 0 0 0;

`

export default AppLayout
