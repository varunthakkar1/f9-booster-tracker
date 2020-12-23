import './App.css';
import Booster from './components/Booster';

function App() {
  return (
    <div className="App">
      <Booster boosterName="Test" firstLaunch="January 1st, 2010" launches="5" landings="5" active>
      </Booster>
      <Booster boosterName="Test" firstLaunch="January 2nd, 2010" launches="2" landings="1">
      </Booster>
    </div>
  );
}

export default App;
