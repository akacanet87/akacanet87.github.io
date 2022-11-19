import styled from 'styled-components'
import { mediaWidth } from '@/styles/theme'

function IntroduceSection () {
  return(
    <IntroduceSectionWrap>
      <IntroduceContainer>
        <ContentBox>
          <h2>
            1℃의 목표
          </h2>
          <p>
            취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던
          </p>
        </ContentBox>
        <ContentBox>
          <h2>
            1℃의 프로젝트는?
          </h2>
          <p>
            취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던 취업 이직 창업을 목표로 했던
          </p>
        </ContentBox>
      </IntroduceContainer>
    </IntroduceSectionWrap>
  )
}

const IntroduceSectionWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const IntroduceContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.pc};
  padding: 124px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and ${mediaWidth.mobile} {
    padding: 72px 12px 96px 12px;
    flex-direction: column;
  }
`

const ContentBox = styled.div`
  width: 50%;
  max-width: 560px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    margin-top: 28px;
    font-size: 20px;
  }

  @media screen and ${mediaWidth.mobile} {
    width: 100%;

    h2 {
      font-size: 32px;
    }

    p {
      margin-top: 20px;
      font-size: 18px;
    }
    
    & + & {
      margin-top: 48px;
    }
  }
`

export default IntroduceSection