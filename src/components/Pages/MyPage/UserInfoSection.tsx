import styled from 'styled-components'

import Image from '@components/Common/Image'

interface UserInfoSectionProps {
  onClickCopyMetamask: () => void
}

function UserInfoSection({ onClickCopyMetamask }: UserInfoSectionProps) {
  return (
    <UserInfoSectionWrapper className="no-gutter">
      <BackgroundImage src="/assets/images/bg-mypage.gif" objectFit="cover" />
      <UserImage src="/assets/images/image-default.png" objectFit="contain" />
      <UserName>
        John Doe
      </UserName>
      <MetaMaskAddress onClick={onClickCopyMetamask}>
        0xebe39dc929184ebf9a18726d0482c
      </MetaMaskAddress>
    </UserInfoSectionWrapper>
  )
}

const UserInfoSectionWrapper = styled.section`
  width: 100%;
  height: 32rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  overflow: hidden;
`

const UserImage = styled(Image)`
  width: 10.8rem;
  height: 10.8rem;
  margin-top: 3.2rem;
  border-radius: 9rem;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.black09};
`

const UserName = styled.p`
  padding: 0.8rem 1.2rem;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black09};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.4rem;
  cursor: pointer;
  z-index: 1;
`

const MetaMaskAddress = styled.p`
  padding: 0.8rem 1.2rem;
  margin-top: 1.8rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black09};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 0.4rem;
  cursor: pointer;
  z-index: 1;
`

export default UserInfoSection
