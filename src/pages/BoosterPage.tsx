import React from "react";
import styled from "styled-components";
import BoosterCard from "../components/BoosterCard";
import { Booster } from "../model/Booster";
import { boosterData } from '../data/boosterData';
import { useParams } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  font-family: "Overpass", sans-serif;
  flex-wrap: wrap;
`;

interface BoosterRouteParams {
    id: string;
}

const BoosterPage: React.FC = () => {
    let { id } = useParams<BoosterRouteParams>();
    console.log(id)

    return (
        <Container>
            {boosterData.map((item: Booster) => (
                parseInt(id) === item.id ? <BoosterCard booster={item}/> : null
            ))}
        </Container>
    )
}

export default BoosterPage;