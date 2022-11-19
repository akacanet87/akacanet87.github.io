import cx from 'classnames'
import { useRouter } from 'next/router'
import styled, { CSSObject } from 'styled-components'

import { PAGE_PATH } from '@utils/constants/routes'

interface LogoProps {
  width?: number
  height?: number
  style?: CSSObject
  className?: string
}

function Logo({ width = 200, height = 48, style = {}, className = ''}: LogoProps) {
  const router = useRouter()
  const onClick = () => {
    router.push(PAGE_PATH.HOME)
  }
  return (
    <LogoWrapper
      className={cx(`logo ${className}`)}
      width={width}
      height={height}
      style={style}
      onClick={onClick}
     />
  )
}

// eslint-disable-next-line jsx-a11y/heading-has-content,react/jsx-props-no-spreading
const LogoWrapper = styled(({ width, height, ...rest }) => <h2 {...rest} />)`
  width: ${(props) => props.width * 0.1}rem;
  height: ${(props) => props.height * 0.1}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/assets/images/logos/vitameet-logo-400x400.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

export default Logo
