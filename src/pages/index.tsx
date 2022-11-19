import {
  GetServerSideProps
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import DiscordSection from '@components/Pages/Index/DiscordSection'
import EventSection from '@components/Pages/Index/EventSection'
import GarbageSection from '@components/Pages/Index/GarbageSection'
import MapSection from '@components/Pages/Index/MapSection'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'

function PageHome() {
  const { t } = useTranslation()
  return (
    <>
      <MetaHead
        title={t('home:meta.title')}
        description={t('home:meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.HOME}
      />
      <PageHomeWrapper>
        <GarbageSection />
        <MapSection />
        <DiscordSection />
        <EventSection />
      </PageHomeWrapper>
    </>
  )
}

const PageHomeWrapper = styled.div`
  padding: 3.2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const getServerSideProps: GetServerSideProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})


export default PageHome
