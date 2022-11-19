import NoSsr from 'react-no-ssr'
import Slider from 'react-slick'
import styled from 'styled-components'

import Image from '@components/Common/Image'

interface ImageSliderProps {
  images: string[]
}

function ImageSlider({ images }: ImageSliderProps) {
  return (
    <NoSsr>
      <ImageSliderWrapper>
        <Slider>
          {images.map((image) =>
            <Image src={image} />
          )}
        </Slider>
      </ImageSliderWrapper>
    </NoSsr>
  )
}

const ImageSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
`

// const SliderItem = styled(Image)<{ width: string, height: string }>`
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
// `

export default ImageSlider
