import Styled from 'styled-components'
import { FaFacebookMessenger, FaSearch } from 'react-icons/fa'

const Icon = ({ children }) => {
  return (
    <IconCircle>
      { children }
    </IconCircle>
  )
}

const NavbarOne = () => {
  return (
    <Navbar>
      <h1 className="mt-3" style={{color: '#1877f2'}}>facebook</h1>
      <NavColRight className='d-flex align-items-center justify-content-center'>
        <Icon>
          <FaSearch size='18' />
        </Icon>
        <Icon>
          <FaFacebookMessenger size='20' />
        </Icon>
      </NavColRight>
    </Navbar>
  )
}

export default NavbarOne;

const Navbar = Styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0px 10px;
`

const NavColRight = Styled.div`
`

const IconCircle = Styled.div`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  border-radius: 50px;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`