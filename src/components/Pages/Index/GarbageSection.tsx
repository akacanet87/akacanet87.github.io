import styled from 'styled-components'

import useTranslation from '@hooks/useTranslation'

function GarbageSection() {
  const { t } = useTranslation()
  return (
    <section>
      <SectionTitle>
        {t('home:garbageSection.title')}
        <span>
          {t('home:garbageSection.smallTitle')}
        </span>
      </SectionTitle>
      <GarbageImageContainer>
        이미지 아직 못정했습니다!
      </GarbageImageContainer>
    </section>
  )
}

const SectionTitle = styled.h2`
  margin-bottom: 1.6rem;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    font-size: 1.8rem;
  }
`

const GarbageImageContainer = styled.div`
  width: 100%;
  height: 36rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.4rem;
`

export default GarbageSection
