import styled from 'styled-components'
import FImage from '@/components/Common/FImage'
import { mediaWidth } from '@/styles/theme'

function LoadMapSection () {
  return(
    <LoadMapSectionWrap>
      <LoadMapContainer>
        <ContentBox>
          <h2>
            1℃의 로드맵
            <span>
              ver 1.0
            </span>
          </h2>
        </ContentBox>
        <ImageBox>
          <FImage
            src="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
            alt="비타밋 앱 예시 이미지"
          />
        </ImageBox>
      </LoadMapContainer>
    </LoadMapSectionWrap>
  )
}

const LoadMapSectionWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black01};
`

const LoadMapContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.pc};
  padding: 124px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and ${mediaWidth.mobile} {
    padding: 72px 12px 96px 12px;
    flex-direction: column;
  }
`

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    
    span {
      margin-left: 12px;
      font-size: 24px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.black07};
    }
  }

  @media screen and ${mediaWidth.mobile} {

    h2 {
      font-size: 32px;
      
      span {
        font-size: 18px;
      }
    }
  }
`

const ImageBox = styled.div`
  width: 100%;
  height: 480px;
  margin-top: 64px;
  position: relative;

  .image {
    height: 100%;
  }

  @media screen and ${mediaWidth.mobile} {
    margin-top: 36px;
  }
`

export default LoadMapSection
