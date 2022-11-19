import {
  GetStaticProps,
  NextPageContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

function PageAuthCallback() {
  const { t } = useTranslation()
  return (
    <>
      <MetaHead
        title={t('auth:login.meta.title')}
        description={t('auth:login.meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.LOGIN}
      />
      <PageAuthCallbackWrapper>
        소셜 로그인 후 리디렉션 페이지
      </PageAuthCallbackWrapper>
    </>
  )
}

const PageAuthCallbackWrapper = styled.div`
  padding: 3.2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const getStaticProps: GetStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})

export default PageAuthCallback
