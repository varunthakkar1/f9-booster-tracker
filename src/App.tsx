import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import BoosterPage from './pages/BoosterPage'
import BoostersPage from './pages/BoostersPage'
import MissionsPage from './pages/MissionsPage'
import MissionPage from './pages/MissionPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import styled from 'styled-components'

const StyledRouter = styled(Router)`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <StyledRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/boosters">
          <BoostersPage />
        </Route>
        <Route exact path="/boosters/:id">
          <BoosterPage />
        </Route>
        <Route exact path="/missions">
          <MissionsPage />
        </Route>
        <Route exact path="/missions/:id">
          <MissionPage />
        </Route>
      </Switch>
    </StyledRouter>
  )
}

export default App
