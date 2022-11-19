import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import QrCodeIcon from '@mui/icons-material/QrCode'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { mediaWidth } from '@styles/theme'
import { PAGE_PATH } from '@utils/constants/routes'

function BottomNavBar() {
  const router = useRouter()
  const onClickHome = () => {
    router.push(PAGE_PATH.HOME)
  }
  const onClickMyPage = () => {
    router.push(PAGE_PATH.MY_PAGE)
  }
  const onClickCamera = () => {
    alert('카메라 눌렀징')
  }

  return (
    <BottomNavBarWrapper>
      <MenuItem className="home">
        <HomeIcon
          className="icon"
          onClick={onClickHome}
        />
      </MenuItem>
      <MenuItem className="qr">
        <QrCodeIcon
          className="icon"
          onClick={onClickCamera}
        />
      </MenuItem>
      <MenuItem className="mypage">
        <PersonIcon
          className="icon"
          onClick={onClickMyPage}
        />
      </MenuItem>
    </BottomNavBarWrapper>
  )
}

const BottomNavBarWrapper = styled.div`
  display: none;


  @media screen and ${mediaWidth.tab} {
    width: 100%;
    height: 6.4rem;
    position: fixed;
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.black09};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9000;
    opacity: 1;
  }
`

const MenuItem = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.black08};

  .icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};

    * {
      color: inherit;
    }
  }

  &.qr {
    width: 24vw;
    height: 24vw;
    max-width: 8rem;
    max-height: 8rem;
    border-radius: 4rem;
    left: 0;
    right: 0;
    bottom: 0.8rem;
    margin: 0 auto;

    .icon {
      font-size: 4.8rem;
    }
  }

  &.home {
    left: 1.2rem;
  }

  &.mypage {
    right: 1.2rem;
  }
`

export default BottomNavBar
