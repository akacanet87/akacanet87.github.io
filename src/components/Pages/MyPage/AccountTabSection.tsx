import cx from 'classnames'
import styled from 'styled-components'

const Tabs = [
  {
    tabName: '적립내역',
    tabCode: 'history',
  }
]

interface AccountTabSectionProps {
  onClickTab: (tabName: string) => void
  tabCode: string
}

function AccountTabSection({ onClickTab, tabCode = 'history' }: AccountTabSectionProps) {
  return (
    <AccountTabSectionWrapper className="no-gutter">
      <TabContainer>
        {Tabs.map((tab) =>
          <TabItem key={tab.tabCode} onClick={() => onClickTab(tab.tabCode)} className={cx({ on: tabCode === tab.tabCode })}>
            {tab.tabName}
          </TabItem>
        )}
      </TabContainer>
    </AccountTabSectionWrapper>
  )
}

const AccountTabSectionWrapper = styled.section`
  margin-top: 0;
`

const TabContainer = styled.ul`
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black09};
`

const TabItem = styled.li`
  width: 10.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &.on {
    font-weight: bold;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  }
`

export default AccountTabSection
