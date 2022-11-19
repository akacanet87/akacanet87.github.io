import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrapper>
      푸터다
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 24rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.black09};
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Footer
