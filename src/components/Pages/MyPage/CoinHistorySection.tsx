import styled from 'styled-components'

import useTranslation from '@hooks/useTranslation'
import { CoinHistoryItemProps } from '@services/user/types'

interface CoinHistorySectionProps {
  histories: CoinHistoryItemProps[]
}

function CoinHistorySection({ histories }: CoinHistorySectionProps) {
  const { t } = useTranslation()
  return (
    <section>
      <CoinHistoriesContainer>
        {histories.map((history) =>
          <CoinHistoryItem key={history.id}>
            <CoinHistoryDate>
              {history.date}
            </CoinHistoryDate>
            <CoinHistoryInfo>
              {history.locationInfo.title} {history.locationInfo.description}
            </CoinHistoryInfo>
            <CoinHistoryAddress>
              {t('mypage:account.coinHistory.address', { address: history.locationInfo.address })}
            </CoinHistoryAddress>
            <CoinHistoryAmount>
              {t('mypage:account.coinHistory.amount', { amount: history.coin })}
            </CoinHistoryAmount>
          </CoinHistoryItem>
        )}
      </CoinHistoriesContainer>
    </section>
  )
}

const CoinHistoriesContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const CoinHistoryItem = styled.li`
  width: 100%;
  height: 11.2rem;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 2.4rem;
  border-top-right-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black09};
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  
  & + & {
    margin-top: 4.4rem;
  }
`

const CoinHistoryDate = styled.h3`
  height: 3.2rem;
  position: absolute;
  top: -3.2rem;
  left: -0.1rem;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black09};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
`

const CoinHistoryInfo = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`

const CoinHistoryAddress = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`

const CoinHistoryAmount = styled.p`
  width: 100%;
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
  text-align: right;
`

export default CoinHistorySection
