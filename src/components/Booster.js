import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    color: white;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    background-color: white;
    width: 80%;
    margin: 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 8px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.8);
    }

    @media screen and (max-width: 1450px) {
        flex-direction: column;
    }

    @media screen and (min-width: 1600px) {
        width: 70%;
    }
`;

const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0rem 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: space-evenly;
`;

const SidePicture = styled.img`
    width: 50%;

    @media screen and (max-width: 1450px) {
        width: 100%;
    }
`;

const TitleText = styled.div`
    font-weight: bold;
    font-size: 75px;
    color: black;

    @media screen and (max-width: 715px) {
        font-size: 50px;
    }
`;

const FirstFlightText = styled.div`
    font-size: 30px;
    color: #454545;
`;

const InfoText = styled.div`
    font-size: 40px;
    color: black;
`;

const ActiveStatus = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: white;
    background-color: green;
    width: min-content;
    padding: 0rem 1rem;
    margin-top: 5px;
    border-radius: 35px;
`;

const InactiveStatus = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: white;
    background-color: red;
    width: min-content;
    padding: 0rem 1rem;
    margin-top: 5px;
    border-radius: 35px;
`;

const Booster = ({ boosterName, firstLaunch, launches, landings, active, imageSrc }) => {
    return (
        <Container>
            <SidePicture src={imageSrc}/>
            <InfoSection>
                <TitleText>Booster {boosterName}</TitleText>
                <FirstFlightText>First flown {firstLaunch}</FirstFlightText>
                <InfoText>{launches} launch{launches == 1 ? "" : "es"}</InfoText>
                <InfoText>{landings} landing{landings == 1 ? "" : "s"}</InfoText>
                {active ? <ActiveStatus>Active</ActiveStatus> : <InactiveStatus>Inactive</InactiveStatus>}
            </InfoSection>
        </Container>
    );
};

export default Booster;