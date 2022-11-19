import styled from 'styled-components'
import FImage from '@/components/Common/FImage'
import MobileNumberInput from '@/components/Pages/index/MobileNumberInput'
import { mediaWidth } from '@/styles/theme'

function TopSection() {
  return (
    <TopSectionWrap>
      <TopContainer>
        <ContentBox>
          <h2>
            눈에 보이는 당신의 가치,
            <br />
            E2E NFT 프로젝트
          </h2>
          <p>
            서비스가 출시되면 알림이 갈 수 있게
            <br />
            아래 입력창에 연락처를 입력해주세요.
          </p>
          <MobileNumberInput />
        </ContentBox>
        <ImageBox>
          <FImage
            src="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
            alt="비타밋 앱 예시 이미지"
          />
        </ImageBox>
      </TopContainer>
    </TopSectionWrap>
  )
}

const TopSectionWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black01};
`

const TopContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.pc};
  padding: 144px 40px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and ${mediaWidth.mobile} {
    padding: 72px 12px 96px 12px;
    flex-direction: column;
  }
`

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 40px;
  }

  p {
    margin-top: 28px;
    font-size: 20px;
  }
  
  .mobile-number-input {
    margin-top: 48px;
  }

  @media screen and ${mediaWidth.mobile} {
    align-items: center;
    order: 1;
    
    h2 {
      font-size: 32px;
    }
    
    p {
      margin-top: 20px;
      font-size: 16px;
    }

    .mobile-number-input {
      margin-top: 28px;
    }
  }
`

const ImageBox = styled.div`
  width: 360px;
  height: 480px;
  position: absolute;
  right: 40px;

  .image {
    height: 100%;
  }

  @media screen and ${mediaWidth.mobile} {
    height: 288px;
    position: relative;
    right: 0;
    order: 0;
  }
`

export default TopSection
