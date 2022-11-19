import cx from 'classnames'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface LinkProps {
  children: ReactNode
  className?: string
  href: string
  onClick?: () => void
}

function Link({
  children,
  className = '',
  href,
  onClick = () => {},
}: LinkProps) {
  return (
    <LinkWrapper
      className={cx(`link ${className}`)}
      onClick={onClick}
    >
      <NextLink href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          {children}
        </a>
      </NextLink>
    </LinkWrapper>
  )
}

const LinkWrapper = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    width: 100%;
    height: 100%;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

export default Link
