import cx from 'classnames'
import { ReactNode } from 'react'
import styled from 'styled-components'

import itemSizeEnum from '@utils/enums/itemSize.enum'

type ButtonSizeType = itemSizeEnum.Full | itemSizeEnum.Xxl | itemSizeEnum.Xl | itemSizeEnum.Lg | itemSizeEnum.Md | itemSizeEnum.Sm | itemSizeEnum.Xs | itemSizeEnum.Xxs
type ButtonColorType = 'primary' | 'primary-o' | 'secondary' | 'secondary-o' | 'white' | 'gray'

interface ButtonProps {
  onClick: () => void
  size?: ButtonSizeType
  color?: ButtonColorType
  children: string | ReactNode
  className?: string,
}

function Button({ children, onClick, size = itemSizeEnum.Md, color, className }: ButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} className={cx('button', size, color, className)}>
      {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border-width: 0.1rem;
  border-style: solid;
  
  &.full {
    width: 100%;
    height: 5.6rem;
    border-radius: 0.4rem;
    font-size: 2.4rem;
    font-weight: bold;
  }
  &.xxl {
    height: 5.6rem;
    border-radius: 0.4rem;
    font-size: 2.4rem;
    font-weight: bold;
  }
  &.xl {
    height: 5.2rem;
    border-radius: 0.4rem;
    font-size: 2.2rem;
    font-weight: bold;
  }
  &.lg {
    height: 4.8rem;
    border-radius: 0.4rem;
    font-size: 2.0rem;
    font-weight: bold;
  }
  &.md {
    height: 4.4rem;
    border-radius: 0.4rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  &.sm {
    height: 4rem;
    border-radius: 0.2rem;
    font-size: 1.6rem;
  }
  &.xs {
    height: 3.6rem;
    border-radius: 0.2rem;
    font-size: 1.4rem;
  }
  &.xxs {
    height: 3.2rem;
    border-radius: 0.2rem;
    font-size: 1.2rem;
  }
  &.primary {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black09};
  }
  &.primary-o {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.black09};
    color: ${({ theme }) => theme.colors.primary};
  }
  &.white {
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black09};
  }
  &.gray {
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black07};
    color: ${({ theme }) => theme.colors.black02};
  }

  &:hover, &:disabled {
    opacity: 0.7;
  }
`

export default Button
