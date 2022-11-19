import styled from 'styled-components'
import FImage from '@/components/Common/FImage'
import { mediaWidth } from '@/styles/theme'

const TEAM_MATES = [
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
  {
    role: 'DEVELOPER',
    name: '박기득',
    introduce: '# 나는 나다<br /># 내가 짱이다<br /># 비타밋은 유니콘이 될거다',
    image: 'https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png',
  },
]

function TeamMateSection() {
  return (
    <TeamMateSectionWrap>
      <TeamMateContainer>
        <h2>
          TEAM
        </h2>
        <TeamMateBox>
          <TeamMateList>
            {TEAM_MATES.map((teammate, index) =>
              <TeamMate key={`${teammate.name}_${teammate.role}_${index}`}>
                <TeamMateInfo>
                  <label className="role">
                    {teammate.role}
                  </label>
                  <h3 className="name">
                    {teammate.name}
                  </h3>
                  <p
                    className="introduce"
                    dangerouslySetInnerHTML={{ __html: teammate.introduce }}
                  />
                </TeamMateInfo>
                <TeamMateImage>
                  <FImage src={teammate.image} alt={`${teammate.name}님 캐릭터 이미지`} />
                </TeamMateImage>
              </TeamMate>,
            )}
          </TeamMateList>
        </TeamMateBox>
      </TeamMateContainer>
    </TeamMateSectionWrap>
  )
}

const TeamMateSectionWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TeamMateContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.device.pc};
  padding: 124px 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media screen and ${mediaWidth.mobile} {
    padding: 72px 12px 96px 12px;

    h2 {
      font-size: 32px;
    }
  }
`

const TeamMateBox = styled.div`
  width: 100%;
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${mediaWidth.mobile} {
    margin-top: 24px;
  }
`

const TeamMateList = styled.ul`
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const TeamMate = styled.li`
  width: calc(50% - 24px);
  height: 240px;
  margin-bottom: 24px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.black01};

  &:nth-child(2n - 1) {
    margin-right: 24px;
  }

  @media screen and ${mediaWidth.mobile} {
    width: 100%;
    height: 188px;
    margin-bottom: 16px;
    margin-right: 0 !important;
  }
`

const TeamMateInfo = styled.div`
  width: 50%;
  height: 100%;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  .role {
    font-size: 18px;
    font-weight: 200;
  }

  .name {
    font-size: 40px;
    font-weight: 700;
  }

  .introduce {
    font-size: 16px;
    font-weight: 400;
  }

  @media screen and ${mediaWidth.mobile} {
    width: 100%;

    .role {
      font-size: 16px;
    }

    .name {
      font-size: 32px;
    }

    .introduce {
      font-size: 12px;
    }
  }
`

const TeamMateImage = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;

  .image {
    width: 100%;
  }
`

export default TeamMateSection
