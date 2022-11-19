import cx from 'classnames'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Property } from 'csstype'
import NextImage from 'next/image'
import styled from 'styled-components'

interface ImageProps {
  src: string
  alt?: string
  className?: string
  objectFit?: Property.ObjectFit
}

function Image({
  src,
  alt = '',
  className,
  objectFit = 'cover',
}: ImageProps) {
  return (
    <ImageWrapper className={cx('image', className)}>
      <NextImage
        layout="responsive"
        src={src}
        alt={alt}
        objectFit={objectFit}
        width="100%"
        height="100%"
        sizes="100%"
        placeholder="blur"
        blurDataURL="/assets/images/loading.gif"
      />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  
  span {
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
  }
`

export default Image
