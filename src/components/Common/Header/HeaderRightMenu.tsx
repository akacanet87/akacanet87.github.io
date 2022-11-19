import styled from 'styled-components'

import Link from '@components/Common/Link'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

interface HeaderRightMenuProps {
  isAuthenticated: boolean
}

function HeaderRightMenu({ isAuthenticated }: HeaderRightMenuProps) {
  const { t } = useTranslation()
  return (
    <HeaderRightMenuWrapper className="header-right-menu">
      {isAuthenticated ? (
        <MyCoin>
          {t('common:header.coin', { myCoin: 3000 })}
        </MyCoin>
      ) : (
        <Menu>
          {/* <StyledLink href={PAGE_PATH.SIGN_UP}> */}
          {/*  {t('common:header.signup')} */}
          {/* </StyledLink> */}
          <StyledLink href={PAGE_PATH.LOGIN}>
            {t('common:header.login')}
          </StyledLink>
        </Menu>
      )}
    </HeaderRightMenuWrapper>
  )
}

const HeaderRightMenuWrapper = styled.div`
  height: 100%;
`

const MyCoin = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`

const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  
  & + & {
    margin-left: 0.8rem;
  }
`

export default HeaderRightMenu
