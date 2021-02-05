import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const TabItems = ({ to, isActive, children, isNoti, noti }) => {
  return (
    <TabItem>
      <Navlink exact
        to={ to }
        activeClassName={ isActive && 'active' }>
        <WrapperIcon>
          { children }
          { isNoti ? <Noti className='noti'>{ noti }</Noti> : '' }
        </WrapperIcon>
      </Navlink>
    </TabItem>
  )
}

export default TabItems

// styled-components
const TabItem = Styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 5px;
`

const Navlink = Styled(NavLink)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.active svg {
    fill: #1877f2;
  }
  
  &.active::after {
    position: absolute;
    left: 0px;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #1877f2;
    border-radius: 5px 5px 0 0;
  }
`

const WrapperIcon = Styled.span`
  position: relative;
  align-items: center;
  padding-top: 5px;
  svg {
    fill: #65676b;
  }
`

const Noti = Styled.span`
  position: absolute;
  top: 4px;
  right: -4px;
  min-width: 16px;
  height: 16px;
  color: #fff;
  font-size: 9px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 3px 2px;
  border-radius: 50px;
  background-color: red;
  border: 1px solid #fff;
`


