import Styled from 'styled-components'

// import components
import NavbarOne from './NavbarOne'
import NavTabs from './NavTabs'

const Header = () => {
  return (
    <ParentHeader>
      <NavbarOne />
      <NavTabs />
    </ParentHeader>
  )
}

export default Header;

// Style Components
const ParentHeader = Styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`