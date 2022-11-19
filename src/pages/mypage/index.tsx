import {
  GetStaticProps,
  NextPageContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import MetaMaskSection from '@components/Pages/MyPage/MetaMaskSection'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'


function PageMyPage() {
  const { t } = useTranslation()
  const router = useRouter()

  const onClickMetaMask = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('메타마스크 지갑 연동성공!')) {
      router.push(PAGE_PATH.MY_PAGE_ACCOUNT)
    }
  }

  return (
    <>
      <MetaHead
        title={t('mypage:metamask.meta.title')}
        description={t('mypage:metamask.meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.MY_PAGE}
      />
      <PageMyPageWrapper>
        <MetaMaskSection onClickMetaMask={onClickMetaMask} />
      </PageMyPageWrapper>
    </>
  )
}

const PageMyPageWrapper = styled.div`
  padding: 7.2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const getStaticProps: GetStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})


export default PageMyPage
