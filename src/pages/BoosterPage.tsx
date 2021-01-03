import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoosterCard from '../components/BoosterCard';
import { Booster } from '../model/Booster';
import { useParams } from 'react-router-dom';
import { Mission } from '../model/Mission';
import MissionCard from '../components/MissionCard';

const Container = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  font-family: 'Overpass', sans-serif;
  flex-wrap: wrap;
`;

interface BoosterRouteParams {
  id: string;
};

const BoosterPage: React.FC = () => {
  const [booster, setBooster] = useState([]);
  const [missions, setMissions] = useState([])
  let { id } = useParams<BoosterRouteParams>();

  const getBooster = async () => {
    try {
      const url = 'http://localhost:5001/boosters/' + id;
      const response = await fetch(url);
      const jsonData = await response.json();
      setBooster(jsonData);
    } catch (error) {
      console.error(error.message);
    };
  };

  const getMissions = async () => {
      try {
          const url = 'http://localhost:5001/missions/findbybooster/' + id;
          const response = await fetch(url);
          const jsonData = await response.json();
          setMissions(jsonData);
      } catch (error) {
          console.error(error.message);
      }
  }

  useEffect(() => {
    getBooster();
    getMissions();
  }, [])

  return (
    <Container>
      {booster.map((item: Booster, index: number) => (
        <BoosterCard booster={item} key={index} />
      ))}
      {missions.map((mission: Mission, index: number) => (
                <MissionCard mission={mission} key={index}/>
            ))}
    </Container>
  )
}

export default BoosterPage
