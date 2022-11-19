import React from 'react'
import styled from 'styled-components'

interface PageWrapperProps  {
  children: React.ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <PageWrapperWrap>
      {children}
    </PageWrapperWrap>
  )
}

const PageWrapperWrap = styled.div`
  width: 100vw;
  height: 100vh;
`

export default PageWrapper