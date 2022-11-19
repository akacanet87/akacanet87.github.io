import {
  GetStaticProps,
  NextPageContext,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import Image from '@components/Common/Image'
import Link from '@components/Common/Link'
import MetaHead from '@components/Common/MetaHead'
import useTranslation from '@hooks/useTranslation'
import {
  deviceWidth,
} from '@styles/theme'
import { PAGE_PATH } from '@utils/constants/routes'

const eventExamples = [
  {
    id: 1,
    title: '한강 산책로 따라',
    image: 'https://picsum.photos/480/320.webp?blur=1&random=1',
  },
  {
    id: 2,
    title: '서울여대 학교 안',
    image: 'https://picsum.photos/480/320.webp?blur=1&random=2',
  },
  {
    id: 3,
    title: '테디베어와 함께',
    image: 'https://picsum.photos/480/320.webp?blur=1&random=3',
  },
]

function PageEvent() {
  const { t } = useTranslation()
  return (
    <>
      <MetaHead
        title={t('event:event.meta.title')}
        description={t('event:event.meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.EVENT}
      />
      <PageEventWrapper>
        <section>
          <PageTitle>
            {t('event:event.title')}
            <span>
            {t('event:event.smallTitle')}
          </span>
          </PageTitle>
          <EventListContainer>
            {eventExamples.map((event) =>
              <EventItem
                href={`${PAGE_PATH.EVENT}/${event.id}`}
                key={event.id}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                />
                <span className="text">
                  {event.title}
                </span>
              </EventItem>,
            )}
          </EventListContainer>
        </section>
      </PageEventWrapper>
    </>
  )
}

const PageEventWrapper = styled.div`
  padding: 3.2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const PageTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  span {
    font-size: 1.8rem;
  }
`

const EventListContainer = styled.div`
  width: 100%;
  max-width: ${deviceWidth.pc};
`

const EventItem = styled(Link)`
  width: 100%;
  height: 24rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  & + & {
    margin-top: 1.6rem;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .text {
    position: absolute;
    margin: auto;
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    z-index: 1;
  }
`

export const getStaticProps: GetStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})


export default PageEvent
