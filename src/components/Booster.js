import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    color: white;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    background-color: white;
    width: 70%;
    margin: 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 1440px) {
        flex-direction: column;
    }
`;

const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1rem 1.2rem;
`;

const SidePicture = styled.img`
    width: 50%;

    @media screen and (max-width: 1440px) {
        width: 100%;
    }
`;

const TitleText = styled.div`
    font-weight: 10;
    font-size: 75px;
    color: black;
`;

const InfoText = styled.div`
    font-weight: 5;
    font-size: 40px;
    color: black;
`;

const ActiveStatus = styled.div`
    font-weight: 5;
    font-size: 50px;
    color: green;
`;

const InactiveStatus = styled.div`
    font-weight: 5;
    font-size: 50px;
    color: red;
`;

const Booster = ({ boosterName, firstLaunch, launches, landings, active }) => {
    return (
        <Container>
            <SidePicture src="//live.staticflickr.com/65535/50740257323_ec8613df86_c.jpg"/>
            <InfoSection>
                <TitleText>Booster {boosterName}</TitleText>
                <InfoText>First flown {firstLaunch}</InfoText>
                <InfoText>{launches} launches</InfoText>
                <InfoText>{landings} landings</InfoText>
                {active ? <ActiveStatus>Active</ActiveStatus> : <InactiveStatus>Inactive</InactiveStatus>}
            </InfoSection>
        </Container>
    );
};

export default Booster;