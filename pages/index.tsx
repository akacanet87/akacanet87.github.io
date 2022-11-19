import styled from 'styled-components'
import { PAGE_PATH } from '@/plugins/contstants'
import MetaHead from '@/components/Common/MetaHead'
import TopSection from '@/components/Pages/index/TopSection'
import IntroduceSection from '@/components/Pages/index/IntroduceSection'
import LoadMapSection from '@/components/Pages/index/LoadMapSection'
import TeamMateSection from '@/components/Pages/index/TeamMateSection'

export default function Home() {
  return (
    <>
      <MetaHead
        title="홈"
        description="Vitameet Home"
        imageUrl="https://github.com/akacanet87/akacanet87.github.io/blob/master/logo-canet-primary.png"
        path={PAGE_PATH.HOME}
      />
      <HomePage>
        <TopSection />
        <IntroduceSection />
        <LoadMapSection />
        <TeamMateSection />
      </HomePage>
    </>
  )
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
`