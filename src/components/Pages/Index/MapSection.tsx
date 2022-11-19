import styled from 'styled-components'

import Link from '@components/Common/Link'
import NaverMap from '@components/Common/NaverMap'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

function MapSection() {
  const { t } = useTranslation()
  return (
    <section className="no-gutter">
      <SectionTitle>
        {t('home:mapSection.title')}
        <span>
          {t('home:mapSection.smallTitle')}
        </span>
        <Link className="more-link" href={PAGE_PATH.MAP}>
          {t('common:moreLink')}
        </Link>
      </SectionTitle>
      <MapContainer>
        <NaverMap width="100%" height="27.2rem" />
      </MapContainer>
    </section>
  )
}

const SectionTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 2.8rem;
  font-weight: 700;
  padding: 0 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: baseline;
  line-height: normal;
  position: relative;

  span {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
  }
  
  .more-link {
    position: absolute;
    right: 1.2rem;
    bottom: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const MapContainer = styled.div`
  width: 100%;
`

export default MapSection
