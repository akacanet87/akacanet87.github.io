import styled from 'styled-components'

import Loader from '@components/Common/Loader'
import useMap from '@hooks/useNaverMap'
import useTranslation from '@hooks/useTranslation'

interface NaverMapProps {
  width: string
  height: string
}

function NaverMap({ width, height }: NaverMapProps) {
  const { t } = useTranslation()
  const { loading } = useMap()

  return (
    <NaverMapWrapper style={{ width, height }}>
      {loading && (
        <Loader text={t('map:loading')} />
      )}
      <MapWrapper
        id="map"
        style={{ width, height, opacity: loading ? 0 : 1 }}
      />
    </NaverMapWrapper>
  )
}

const NaverMapWrapper = styled.div`
  position: relative;
`

const MapWrapper = styled.div`
  width: 100%;
  height: 27.2rem;
`;

export default NaverMap
