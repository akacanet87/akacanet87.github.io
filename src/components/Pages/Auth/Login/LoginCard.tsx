import { signIn } from 'next-auth/react'
import styled from 'styled-components'

import Button from '@components/Form/Button'
import useTranslation from '@hooks/useTranslation'
import { mediaWidth } from '@styles/theme'


function LoginCard() {
  const { t } = useTranslation()

  return (
    <LoginCardWrapper>
      <CardTitle>
        {t('auth:login.card.title')}
      </CardTitle>
      <CardBody>
        <GoogleButton onClick={() => signIn('google')}>
          <img src="/assets/images/icons/icon-google.svg" alt={t('auth:login.card.button.googleAlt')} />
          <span>
             {t('auth:login.card.button.google')}
          </span>
        </GoogleButton>
        <NaverButton onClick={() => signIn('naver')}>
          <img src="/assets/images/icons/icon-naver.png" alt={t('auth:login.card.button.naverAlt')} />
          <span>
             {t('auth:login.card.button.naver')}
          </span>
        </NaverButton>
        <KakaoButton onClick={() => signIn('kakao')}>
          <img src="/assets/images/icons/icon-kakao.png" alt={t('auth:login.card.button.kakaoAlt')} />
          <span>
             {t('auth:login.card.button.kakao')}
          </span>
        </KakaoButton>
      </CardBody>
    </LoginCardWrapper>
  )
}

const LoginCardWrapper = styled.div`
  width: 100%;
  max-width: 42rem;
  padding: 3.2rem 2rem;
  //border: 0.1rem solid ${({ theme }) => theme.colors.primary};

  @media screen and ${mediaWidth.mobile} {
    padding: 2rem 1.2rem;
    border: none;
  }
`

const CardTitle = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const CardBody = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .button + .button {
    margin-top: 1.6rem;
  }
`

const GoogleButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.black02};

  img {
    width: 2.4rem;
  }
  
  span {
    margin-left: 1.2rem;
    color: ${({ theme }) => theme.colors.black09};
  }
`

const NaverButton = styled(Button)`
  width: 100%;
  background-color: rgb(30, 199, 0) !important;
  border: 0.1rem solid rgb(30, 199, 0) !important;
  
  img {
    width: 2.4rem;
  }
  
  span {
    margin-left: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`

const KakaoButton = styled(Button)`
  width: 100%;
  background-color: rgb(255, 232, 18) !important;
  border: 0.1rem solid rgb(255, 232, 18) !important;

  img {
    width: 2.4rem;
  }
  
  span {
    margin-left: 1.2rem;
    color: ${({ theme }) => theme.colors.black09};
  }
`

export default LoginCard
