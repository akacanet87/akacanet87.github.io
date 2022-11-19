import { ReactNode } from 'react'
import styled from 'styled-components'

interface PageWrapperProps  {
  children: ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <StyledPageWrapper>
      {children}
    </StyledPageWrapper>
  )
}

const StyledPageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`

export default PageWrapper
