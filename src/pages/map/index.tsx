import {
  GetServerSideProps,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from 'styled-components'

import MetaHead from '@components/Common/MetaHead'
import NaverMap from '@components/Common/NaverMap'
import useTranslation from '@hooks/useTranslation'
import { PAGE_PATH } from '@utils/constants/routes'


function PageMap() {
  const { t } = useTranslation()
  return (
    <>
      <MetaHead
        title={t('map:meta.title')}
        description={t('map:meta.description')}
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.MAP}
      />
      <PageMapWrapper>
        <NaverMap
          width="100vw"
          height="calc( 100vh - 12.4rem )"
        />
      </PageMapWrapper>
    </>
  )
}

const PageMapWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const getServerSideProps: GetServerSideProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
})

export default PageMap
