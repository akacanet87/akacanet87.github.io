import Script from 'next/script'
import {
  ReactNode,
} from 'react'
import styled from 'styled-components'

import BottomNavBar from '@components/Common/BottomNavBar'
import Footer from '@components/Common/Footer'
import Header from '@components/Common/Header'
import PageWrapper from '@components/Common/PageWrapper'
import { GlobalStyle } from '@styles/global-style'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface AppLayoutProps {
  children: ReactNode
}

/* eslint-disable no-console */
// console.log('Version: ', process.env.GIT_VERSION_HASH)
console.log(
  '%cOneDegree',
  `
  font-family: sans-serif;
  color: #FFF;
  font-weight: bold;
  font-size: 60px;
`,
)

/* eslint-enable no-console */

function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppLayoutWrapper>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
      />
      <GlobalStyle />
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
      <BottomNavBar />
    </AppLayoutWrapper>

  )
}

const AppLayoutWrapper = styled.div`
  padding: calc(constant(safe-area-inset-top)) 0 calc(constant(safe-area-inset-bottom)) 0;
  padding: calc(env(safe-area-inset-top)) 0 calc(env(safe-area-inset-bottom)) 0;
`

export default AppLayout
