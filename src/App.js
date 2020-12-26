import Booster from './components/Booster';
import { boosterData } from './data/boosterData';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background-image: linear-gradient(to right, #7875ff, #5956f5);
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Overpass', sans-serif;
  flex-wrap: wrap;

  @media screen and (max-width: 1450px) {
    flex-direction: row;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Container>
      {boosterData.map((item, index) => (
        <Booster 
        boosterName={item.boosterName} 
        description={item.description}
        imageSrc={item.imageSrc}
        imageCaption={item.imageCaption}
        >
        </Booster>
    ))}
    </Container>
  );
}

export default App;
