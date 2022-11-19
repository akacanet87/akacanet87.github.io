import styled from 'styled-components'

import Image from '@components/Common/Image'
import Link from '@components/Common/Link'
import useTranslation from '@hooks/useTranslation'
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

function EventSection() {
  const { t } = useTranslation()

  return (
    <section>
      <SectionTitle>
        {t('home:eventSection.title')}
        <span>
          {t('home:eventSection.smallTitle')}
        </span>
        <Link
          className="more-link"
          href={PAGE_PATH.EVENT}
        >
          {t('common:moreLink')}
        </Link>
      </SectionTitle>
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
  )
}

const SectionTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: baseline;
  line-height: normal;
  position: relative;

  span {
    font-size: 1.8rem;
  }

  .more-link {
    position: absolute;
    right: 1.2rem;
    bottom: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const EventListContainer = styled.div`
  width: 100%;
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

export default EventSection
