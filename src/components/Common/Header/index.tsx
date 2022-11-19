import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import isNil from 'lodash/isNil'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import HeaderRightMenu from '@components/Common/Header/HeaderRightMenu'
import Logo from '@components/Common/Logo'
import useHeader from '@hooks/useHeader'
import useResponsiveMode from '@hooks/useResponsiveMode'
import { mediaWidth } from '@styles/theme'
import { PAGE_PATH } from '@utils/constants/routes'

const BackMenuPage = [
  PAGE_PATH.EVENT_DETAIL,
]

function Header() {
  const responsiveMode = useResponsiveMode()
  const { data: session } = useSession()
  const router = useRouter()
  const { headerTitle } = useHeader()

  const isAuthenticated = !isNil(session)
  const isBackMenu = BackMenuPage.includes(router.pathname) && responsiveMode.isMobileWidth

  const onClickBack = () => {
    router.back()
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {isBackMenu ?
          (
            <BackMenu>
              <ArrowBackIcon className="icon" onClick={onClickBack} />
            </BackMenu>
          ) :
          (
            <Logo
              width={responsiveMode.isMobileWidth ?
                132 :
                164}
            />
          )}
        {responsiveMode.isMobileWidth && headerTitle && (
          <HeaderTitle>
            {headerTitle}
          </HeaderTitle>
        )}
        <HeaderRightMenu isAuthenticated={isAuthenticated} />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 7.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${mediaWidth.mobile} {
    height: 6rem;
  }
`

const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.pc};
  padding: 0 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    left: 4rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  .header-right-menu {
    position: absolute;
    right: 4rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  @media screen and ${mediaWidth.mobile} {
    padding: 0 1.2rem;

    .logo {
      left: 1.2rem;
    }

    .header-right-menu {
      right: 1.2rem;
    }
  }
`

const BackMenu = styled.div`
  position: absolute;
  left: 4rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${mediaWidth.mobile} {
    left: 1.2rem;
    
    .icon {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.primary};

      * {
        color: inherit;
      }
    }
  }
`

const HeaderTitle = styled.h2`
  width: 100%;
  max-width: calc( 100vw - 8rem );
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

export default Header
