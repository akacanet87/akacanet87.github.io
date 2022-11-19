import React from 'react'

import Image from 'next/image'
import cx from 'classnames'

interface FImageProps {
  src: string
  alt?: string
  className?: string
}

function FImage({
  src,
  alt = '',
  className = '',
}: FImageProps) {
  return (
    <>
      <Image
        layout="fill"
        className={cx(`image ${className}`)}
        src={src}
        alt={alt}
      />
    </>
  )
}

export default FImage
