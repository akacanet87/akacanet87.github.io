import { OneDegreeGarbageProps } from '@services/upcycle/types'

export interface CoinHistoryItemProps {
  id: number
  locationInfo: OneDegreeGarbageProps,
  date: string
  coin: number
}
