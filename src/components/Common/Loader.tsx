import cx from 'classnames'
import styled from 'styled-components'

import Image from '@components/Common/Image'
import useTranslation from '@hooks/useTranslation'
import { mediaWidth } from '@styles/theme'
import ItemSizeEnum from '@utils/enums/itemSize.enum'

type LoaderSizeType = ItemSizeEnum.Full | ItemSizeEnum.Lg | ItemSizeEnum.Md | ItemSizeEnum.Sm

interface LoaderProps {
  text?: string
  size?: LoaderSizeType
  isDimmed?: boolean
}

function Loader({ text, size = ItemSizeEnum.Md, isDimmed = false }: LoaderProps) {
  const { t } = useTranslation()

  return (
    <LoaderWrapper className={cx(size, { dimmed: isDimmed })}>
      <span className="text">
        {text}
      </span>
      <Image className={cx('loading', size)} src="/assets/images/loading.gif" alt={t('common:loading')} objectFit="contain" />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15%;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text {
    z-index: 10;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
  
  &.full {
    position: fixed;
    width: 100vw;
    height: 100vh;

    .text {
      font-size: 2.8rem;
    }
    .image {
      width: 36rem;
      height: 36rem;
    }
  }
  &.lg {

    .text {
      font-size: 2.4rem;
    }
    .image {
      width: 32rem;
      height: 32rem;
    }
  }
  &.md {

    .text {
      font-size: 2rem;
    }
    .image {
      width: 28rem;
      height: 28rem;
    }
  }
  &.sm {

    .text {
      font-size: 1.8rem;
    }
    .image {
      width: 24rem;
      height: 24rem;
    }
  }

  &.dimmed:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.1;
  }

  @media screen and ${mediaWidth.mobile} {
    &.full {

      .text {
        font-size: 2.4rem;
      }
      .image {
        width: 28rem;
        height: 28rem;
      }
    }
    &.lg {

      .text {
        font-size: 2.4rem;
      }
      .image {
        width: 26rem;
        height: 26rem;
      }
    }
    &.md {

      .text {
        font-size: 2rem;
      }
      .image {
        width: 24rem;
        height: 24rem;
      }
    }
    &.sm {

      .text {
        font-size: 1.8rem;
      }
      .image {
        width: 22rem;
        height: 22rem;
      }
    }
  }
`

export default Loader
