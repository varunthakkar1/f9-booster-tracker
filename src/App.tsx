import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BoosterPage from "./pages/BoosterPage";
import BoostersPage from "./pages/BoostersPage";

function App() {
  return (
    <Router>

      <Link to="/" style={{padding: "1rem 1rem"}}>Home</Link>
      <Link to="/missions" style={{padding: "1rem 1rem"}}>Missions</Link>
      <Link to="/boosters">Boosters</Link>  

      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/boosters">
          <BoostersPage/>
        </Route>
        <Route exact path="/boosters/:id">
          <BoosterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
