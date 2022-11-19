import styled from 'styled-components'
import Logo from '@/components/Common/Logo'
import useResponsiveMode from '@/hooks/useResponsiveMode'
import { mediaWidth } from '@/styles/theme'

function Header() {
  const responsiveMode = useResponsiveMode()
  return (
    <HeaderWrap>
      <div className="header-container">
        <Logo width={responsiveMode.isMobileWidth ? 132 : 164} />
      </div>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black02};
  display: flex;
  align-items: center;
  justify-content: center;
  
  .header-container {
    width: 100%;
    max-width: ${({ theme }) => theme.device.pc};
    padding: 0 40px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    
    .logo {
      position: absolute;
      left: 40px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
  
  @media screen and ${mediaWidth.mobile} {
    height: 60px;
    
    .header-container {
      padding: 0 12px;
      
      .logo {
        left: 12px;
      }
    }
  }
`

export default Header