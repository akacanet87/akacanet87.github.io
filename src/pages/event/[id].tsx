import {
  GetStaticPaths,
  GetStaticProps,
  NextPageContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import ContentSection from '@components/Pages/Event/ContentSection'
import TopSection from '@components/Pages/Event/TopSection'
import useHeader from '@hooks/useHeader'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

const EventMockData = {
  id: 1,
  background: [
    'https://picsum.photos/480/320.webp?random=4',
    'https://picsum.photos/480/320.webp?random=5',
    'https://picsum.photos/480/320.webp?random=6',
    'https://picsum.photos/480/320.webp?random=7',
    'https://picsum.photos/480/320.webp?random=8',
    'https://picsum.photos/480/320.webp?random=9',
  ],
  thumbnail: 'https://picsum.photos/108/108.webp?random=10',
  title: '한강공원에서 이벤트',
  description: '서울시와 함께하는 한강공원 이벤트!\n누가 누가 더 많이 재활용을 했을까요?\n\n서울시와 1℃가 한강공원 생태계를 보호하기 위한 첫 걸음으로 준비한 콜라보레이션 이벤트!\n\n1등부터 10등까지에게는 대박 상품이!\n순위권이 아니더라도 랜덤 추첨을 통한 다양한 소정의 상품이!\n쓰레기통에 재활용하는거 어렵지 않잖아요?\n환경도 지키면서 경품을 타봅시다!',
  dueDate: '2022-12-31',
}

function PageEventDetail() {
  const { t } = useTranslation()
  const { setHeaderTitle } = useHeader()
  const router = useRouter()
  const { id } = router.query

  const onAttendEvent = () => {
    alert('이벤트 참여할게요!')
  }

  useEffect(() => {
    setHeaderTitle(EventMockData.title)
  }, [])

  return (
    <>
      <MetaHead
        title={t('event:eventDetail.meta.title', { title: EventMockData.title })}
        description={t('event:eventDetail.meta.description', { description: EventMockData.description })}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={`${PAGE_PATH.EVENT}/${id}`}
      />
      <PageEventDetailWrapper>
        <TopSection title={EventMockData.title} backgrounds={EventMockData.background} thumbnail={EventMockData.thumbnail} />
        <ContentSection title={EventMockData.title} description={EventMockData.description} dueDate={EventMockData.dueDate} onAttendEvent={onAttendEvent} />
      </PageEventDetailWrapper>
    </>
  )
}

const PageEventDetailWrapper = styled.div`
  padding-bottom: 4.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking' // indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})


export default PageEventDetail
