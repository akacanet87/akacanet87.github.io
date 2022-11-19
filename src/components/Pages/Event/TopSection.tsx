import styled from 'styled-components'

import Image from '@components/Common/Image'
import ImageSlider from '@components/Common/ImageSlider'
import useTranslation from '@hooks/useTranslation'

interface TopSectionProps {
  title: string
  backgrounds: string[]
  thumbnail: string
}

function TopSection({ title, backgrounds, thumbnail }: TopSectionProps) {
  const { t } = useTranslation()

  return (
    <TopSectionWrapper>
      <ImageSlider images={backgrounds} />
      <ThumbnailImage
        src={thumbnail}
        alt={t('event:eventDetail.thumbnail', { title })}
        objectFit="contain"
      />
    </TopSectionWrapper>
  )
}

const TopSectionWrapper = styled.section`
  width: 100%;
  height: 27.2rem;
  padding: 0;
  position: relative;
  z-index: 100;
`

const ThumbnailImage = styled(Image)`
  width: 10.8rem;
  height: 10.8rem;
  position: absolute;
  bottom: -2.4rem;
  left: 3.6rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5.4rem;
  z-index: 1;
  overflow: hidden;
`

export default TopSection
