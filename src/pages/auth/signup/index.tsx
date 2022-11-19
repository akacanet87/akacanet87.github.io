import {
  GetStaticProps,
  NextPageContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import SignupCard from '@components/Pages/Auth/Signup/SignupCard'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

function PageSignup() {
  const { t } = useTranslation()
  return (
    <>
      <MetaHead
        title={t('auth:signup.meta.title')}
        description={t('auth:signup.meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.SIGN_UP}
      />
      <PageSignupWrapper>
        <h2>
          {t('auth:signup.card.title')}
        </h2>
        <SignupCard />
      </PageSignupWrapper>
    </>
  )
}

const PageSignupWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default PageSignup

export const getStaticProps: GetStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})
