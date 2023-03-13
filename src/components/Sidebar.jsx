import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Landing from './home/landing/Landing'
import Mint from './home/mint/Mint'
import Shop from './home/shop/Shop'

import Account from './personal/account/Account'
import Roster from './personal/roster/Roster'
import Locker from './personal/locker/Locker'
import Trophy from './personal/trophy/Trophy'

export default function Sidebar() {
  const location = useLocation();
  const [sections, setSections] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === '/') setSections([
      {tab: 'Home', panel: <Landing />},
      {tab: 'Mint', panel: <Mint />},
      {tab: 'Shop', panel: <Shop />}
    ])
    if (location.pathname === '/personal') setSections([
      {tab: 'Account', panel: <Account />},
      {tab: 'Roster', panel: <Roster />},
      {tab: 'Locker', panel: <Locker />},
      {tab: 'Trophy Room', panel: <Trophy />}
    ])
    setIndex(0);
  }, [location])

  return (
    <Tabs isFitted isLazy index={index} onChange={(index) => setIndex(index)}>
      <TabList orientation='vertical'>
        {sections.map((s) => <Tab key={s.tab}>{s.tab}</Tab>)}
      </TabList>

      <TabPanels>
      {sections.map((s) => <TabPanel key={s}>{s.panel}</TabPanel>)}
      </TabPanels>
    </Tabs>
  )
}