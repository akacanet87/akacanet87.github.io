import styled from 'styled-components'

import Button from '@components/Form/Button'
import useTranslation from '@hooks/useTranslation'
import itemSizeEnum from '@utils/enums/itemSize.enum'

interface ContentSectionProps {
  title: string
  description: string
  dueDate: string
  onAttendEvent: () => void
}

function ContentSection({ title, description, dueDate, onAttendEvent }: ContentSectionProps) {
  const { t } = useTranslation()
  return (
    <ContentSectionWrapper>
      <TitleBox>
        {title}
      </TitleBox>
      <DescriptionBox>
        {description}
      </DescriptionBox>
      <DueDateBox>
        {t('event:eventDetail.dueDate', { dueDate })}
      </DueDateBox>
      <Button onClick={onAttendEvent} size={itemSizeEnum.Full} color="primary">
        {t('event:eventDetail.attendEvent')}
      </Button>
    </ContentSectionWrapper>
  )
}

const ContentSectionWrapper = styled.section`
  margin-top: 1.6rem;
  
  .button {
    margin-top: 2.4rem;
  }
`

const TitleBox = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black09};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.2rem;
  font-weight: bold;
  border-radius: 0.4rem;
`

const DescriptionBox = styled.div`
  width: 100%;
  padding: 1.6rem;
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black09};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  border-radius: 0.4rem;
  white-space: pre-wrap;
`

const DueDateBox = styled.div`
  width: 100%;
  padding: 1.6rem;
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black09};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  border-radius: 0.4rem;
`

export default ContentSection
