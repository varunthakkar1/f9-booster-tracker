import React, { useEffect, useState } from "react";
import { boosterData } from "../data/boosterData";
import styled from "styled-components";
import BoosterCard from "../components/BoosterCard";
import { Booster } from "../model/Booster";

const Container = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  font-family: "Overpass", sans-serif;
  flex-wrap: wrap;
`;

const BoostersPage: React.FC = () => {
  const [boosters, setBoosters] = useState([])

  const getBoosters = async () => {
    try {
      const response = await fetch("http://localhost:5001/boosters/");
      const jsonData = await response.json();
      setBoosters(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getBoosters();
  }, []);

  return (
    <Container>
      {boosters.map((item: Booster, index: number) => (
        <BoosterCard booster={item} key={index}/>
      ))}
    </Container>
  );
};

export default BoostersPage;
