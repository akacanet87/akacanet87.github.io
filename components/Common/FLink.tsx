import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import cx from 'classnames'

interface FLinkProps {
  children: React.ReactNode
  className?: string
  href: string
  onClick?: () => void
}

function FLink({
  children,
  className = '',
  href,
  onClick = () => {},
}: FLinkProps) {
  return (
    <FLinkWrap
      className={cx(`link ${className}`)}
      onClick={onClick}
    >
      <Link href={href}>
        <a>
          {children}
        </a>
      </Link>
    </FLinkWrap>
  )
}

const FLinkWrap = styled.div`
  color: ${({ theme }) => theme.colors.black04};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    color: inherit;
  }

`

export default FLink
