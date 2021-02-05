import Styled from 'styled-components';
import { BrowserRouter as Router} from 'react-router-dom';

// import layouts
import Header from './layouts/header/Header'
import Main from './layouts/main/Main'

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  )
}

export default App
