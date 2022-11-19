import styled from 'styled-components'

import Button from '@components/Form/Button'
import useTranslation from '@hooks/useTranslation'
import itemSizeEnum from '@utils/enums/itemSize.enum'

interface MetaMaskSectionProps {
  onClickMetaMask: () => void
}

function MetaMaskSection({ onClickMetaMask }: MetaMaskSectionProps) {
  const { t } = useTranslation()

  return (
    <MetaMaskSectionWrapper>
      <Title>
        {t('mypage:metamask.title')}
      </Title>
      <Description>
        {t('mypage:metamask.description')}
      </Description>
      <Button onClick={onClickMetaMask} size={itemSizeEnum.Full} color="primary-o">
        {t('mypage:metamask.button')}
      </Button>
    </MetaMaskSectionWrapper>
  )
}

const MetaMaskSectionWrapper = styled.section`
  .button {
    margin-top: 2.4rem;
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
`
const Description = styled.p`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
`

export default MetaMaskSection
