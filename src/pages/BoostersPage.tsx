import React from "react";
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
  return (
    <Container>
      {boosterData.map((item: Booster) => (
        <BoosterCard booster={item} />
      ))}
    </Container>
  );
};

export default BoostersPage;
