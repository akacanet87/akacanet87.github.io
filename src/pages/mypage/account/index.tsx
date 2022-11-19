import {
  GetStaticProps,
  NextPageContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import AccountTabSection from '@components/Pages/MyPage/AccountTabSection'
import CoinHistorySection from '@components/Pages/MyPage/CoinHistorySection'
import UserInfoSection from '@components/Pages/MyPage/UserInfoSection'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

const CoinHistories = [
  {
    id: 3,
    locationInfo: {
      title: '나는 누구1',
      description: '여긴 어디1',
      latitude: 37.500201,
      longitude: 127.03311,
      address: '서울시 어딘가1'
    },
    coin: 38,
    date: '2022-11-02'
  },
  {
    id: 2,
    locationInfo: {
      title: '나는 누구3',
      description: '여긴 어디3',
      latitude: 37.51833,
      longitude: 127.02837,
      address: '서울시 어딘가3'
    },
    coin: 107,
    date: '2022-11-02'
  },
  {
    id: 1,
    locationInfo: {
      title: '나는 누구2',
      description: '여긴 어디2',
      latitude: 37.51307,
      longitude: 127.04738,
      address: '서울시 어딘가2'
    },
    coin: 84,
    date: '2022-11-02'
  },
]

function PageMyPageAccount() {
  const { t } = useTranslation()

  const onClickCopyMetamask = () => {
    alert('주소 복사 됨!')
  }
  const onClickTab = () => {
    console.log('tab 클릭')
  }

  return (
    <>
      <MetaHead
        title={t('mypage:account.meta.title')}
        description={t('mypage:account.meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.MY_PAGE_ACCOUNT}
      />
      <PageMyPageAccountWrapper>
        <UserInfoSection onClickCopyMetamask={onClickCopyMetamask} />
        <AccountTabSection onClickTab={onClickTab} tabCode="history" />
        <CoinHistorySection histories={CoinHistories} />
      </PageMyPageAccountWrapper>
    </>
  )
}

const PageMyPageAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3.2rem;
`

export const getStaticProps: GetStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})

export default PageMyPageAccount
