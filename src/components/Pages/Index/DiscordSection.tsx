import styled from 'styled-components'

import Image from '@components/Common/Image'
import useTranslation from '@hooks/useTranslation'

function DiscordSection() {
  const { t } = useTranslation()

  const onClickJoinDiscord = () => {
    alert('여기에 디스코드 링크를 넣을게요!')
  }
  return (
    <section>
      <SectionTitle>
        {t('home:discordSection.title')}
        <span>
          {t('home:discordSection.smallTitle')}
        </span>
      </SectionTitle>
      <DiscordBanner onClick={onClickJoinDiscord}>
        <Image className="discord-banner" src="/assets/images/bg-discord.png" alt={t('home:discordSection.bannerTitle')} />
        <span className="text">
          {t('home:discordSection.bannerTitle')}
        </span>
      </DiscordBanner>
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

const DiscordBanner = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.colors.black01};
  border-radius: 0.4rem;
  overflow: hidden;

  .discord-banner {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: auto;
    z-index: 0;
  }

  .text {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.colors.black09};
    font-weight: bold;
    z-index: 1;
    text-decoration: ${({ theme }) => theme.colors.primary};
    text-shadow: -0.1rem 0 ${({ theme }) => theme.colors.primary}, 0 0.1rem ${({ theme }) => theme.colors.primary}, 0.1rem 0 ${({ theme }) => theme.colors.primary}, 0 -0.1rem ${({ theme }) => theme.colors.primary};
  }
`

export default DiscordSection
