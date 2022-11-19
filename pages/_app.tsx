import React from 'react'
import AppLayout from '@/layouts/AppLayout'
import type { AppProps } from 'next/app'

function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default App
