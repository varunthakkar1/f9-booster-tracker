import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import BoosterPage from './pages/BoosterPage'
import BoostersPage from './pages/BoostersPage'
import MissionsPage from './pages/MissionsPage'
import MissionPage from './pages/MissionPage'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Link to="/" style={{ padding: '1rem 1rem' }}>
        Home
      </Link>
      <Link to="/missions" style={{ padding: '1rem 1rem' }}>
        Missions
      </Link>
      <Link to="/boosters">Boosters</Link>

      <Switch>
        <Route exact path="/"></Route>
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
    </Router>
  )
}

export default App
