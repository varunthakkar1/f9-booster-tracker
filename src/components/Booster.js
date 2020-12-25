import React from 'react';
import styled from 'styled-components';
import { VscRocket } from 'react-icons/vsc';
import { RiRecycleLine } from 'react-icons/ri';

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
        font-size: 42px;
    }

    @media screen and (min-width: 1450px) {
        font-size: 75px;
    }
`;

const FirstFlightText = styled.div`
    font-size: 30px;
    color: #575757;
    font-style: italic;

    @media screen and (max-width: 715px) {
        font-size: 23px;
    }

    @media screen and (min-width: 1450px) {
        font-size: 33px;
    }
`;

const InfoText = styled.div`
    font-size: 40px;
    color: black;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 715px) {
        flex-direction: column;
    }

    @media screen and (min-width: 1450px) {
        font-size: 43px;
    }
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

const IconWrapper = styled.div`
    transform: translate(0%, 9%);
    margin-right: 5px;
`;

const Launches = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 1rem;    
`;

const Landings = styled.div`
    display: flex;
    flex-direction: row;    
`;

const Booster = ({ boosterName, firstLaunch, launches, landings, active, imageSrc }) => {
    return (
        <Container>
            <SidePicture src={imageSrc}/>
            <InfoSection>
                <TitleText>Booster {boosterName}</TitleText>
                <FirstFlightText>First flown {firstLaunch}</FirstFlightText>
                <InfoText>
                    <Launches>
                        <IconWrapper>
                            <VscRocket/>
                        </IconWrapper>
                        {launches} launch{launches == 1 ? "" : "es"}
                    </Launches>
                    <Landings>
                        <IconWrapper>
                            <RiRecycleLine/>
                        </IconWrapper>
                        {landings} landing{landings == 1 ? "" : "s"}
                    </Landings>
                </InfoText>
                {active ? <ActiveStatus>Active</ActiveStatus> : <InactiveStatus>Inactive</InactiveStatus>}
            </InfoSection>
        </Container>
    );
};

export default Booster;