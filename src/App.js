import './App.css';
import Booster from './components/Booster';
import { boosterData } from './data/boosterData'

function App() {
  return (
    <div className="App">
      {boosterData.map((item, index) => (
        <Booster 
        boosterName={item.boosterName} 
        firstLaunch={item.firstLaunch}
        launches={item.launches}
        landings={item.landings}
        imageSrc={item.imageSrc}
        active={item.active}
        >
        </Booster>
    ))}
    </div>
  );
}

export default App;
