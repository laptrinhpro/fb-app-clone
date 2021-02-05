import Styled from 'styled-components'
import { headerIcons } from './Icons'

import TabItem from '../../components/Tab'

const NavTab = () => {
  return (
    <Tabs>
      {headerIcons.map(a => (
        <TabItem 
          to={a.link}
          noti={a.notiNumber}
          isNoti={a.isNoti}>
            {a.icon}
        </TabItem>
      ))}
    </Tabs>
  )
} 

export default NavTab

// styled-components
const Tabs = Styled.nav`
  height: 50px;
  display: flex;
`