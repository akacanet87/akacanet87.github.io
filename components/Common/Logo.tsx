import styled, { CSSObject } from 'styled-components'
import cx from 'classnames'

interface LogoProps {
  width?: number
  height?: number
  style?: CSSObject
  className?: string
}

function Logo({ width = 200, height = 48, style = {}, className = ''}: LogoProps) {
  return (
    <LogoWrap
      className={cx(`logo ${className}`)}
      width={width}
      height={height}
      style={style}
    ></LogoWrap>
  )
}

const LogoWrap = styled(({ width, height, ...rest }) => <h2 {...rest} />)`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/assets/images/vitameet-logo-400x400.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default Logo