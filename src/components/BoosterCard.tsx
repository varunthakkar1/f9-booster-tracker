import React from "react";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
import { Booster } from "../model/Booster";
import { useHistory } from "react-router-dom";

interface BoosterCardProps {
  booster: Booster;
}

const Container = styled.div`
  color: white;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  background-color: white;
  width: 76%;
  margin: 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 76%;
  }

  @media screen and (min-width: 960px) and (max-width: 1450px) {
    flex-direction: column;
    width: 40%;
  }
`;

const InfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0rem 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: space-evenly;

  @media screen and (min-width: 1450px) {
    width: 70%;
  }
`;

const ImageSectionWrapper = styled.div`
  width: 50%;
  position: relative;

  @media screen and (max-width: 1450px) {
    width: 100%;
  }
`;

const BoosterImage = styled.img`
  position: block;
  vertical-align: bottom;
  width: 100%;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.25s;
  display: flex;
  justify-content: right;
  align-items: flex-start;

  &:hover {
    opacity: 1;
  }
`;

const CaptionText = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
  font-size: 30px;

  @media screen and (max-width: 715px) {
    font-size: 20px;
  }

  @media screen and (min-width: 960px) and (max-width: 1450px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1450px) {
    font-size: 18px;
  }
`;

const TitleText = styled.div`
  font-weight: bolder;
  font-size: 75px;
  color: black;

  @media screen and (max-width: 715px) {
    font-size: 42px;
  }

  @media screen and (max-width: 1450px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1450px) {
    font-size: 75px;
  }
`;

const Description = styled.div`
  font-size: 22px;
  color: #575757;
  font-style: normal;
  width: 100%;

  @media screen and (max-width: 715px) {
    font-size: 20px;
  }

  @media screen and (min-width: 960px) and (max-width: 1450px) {
    font-size: 27px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 23px;
    width: 90%;
  }
`;

const IconWrapper = styled.div`
  transform: translate(0%, 5%);
  margin-right: 5px;
`;

const ViewMissionsLink = styled.a`
  display: flex;
  color: #2c51b8;
  font-size: 23px;
  font-weight: normal;
  margin-top: 0.5rem;
  flex-wrap: nowrap;
  cursor: pointer;

  @media screen and (min-width: 715px) and (max-width: 1450px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1450px) {
    font-size: 29px;
  }
`;

const BoosterCard = ({ booster }: BoosterCardProps) => {

  let history = useHistory();

  return (
    <Container>
      <ImageSectionWrapper>
        <BoosterImage src={booster.imageSrc}></BoosterImage>
        <Caption>
          <CaptionText>
            <IconWrapper>
              <RiArrowRightSLine />
            </IconWrapper>
            {booster.imageCaption}
          </CaptionText>
        </Caption>
      </ImageSectionWrapper>
      <InfoSectionWrapper>
        <TitleText>{booster.boosterName}</TitleText>
        <Description>{booster.description}</Description>
        <ViewMissionsLink onClick={() => history.push("/boosters/" + booster.boosterId)}>
          View Missions
          <IconWrapper>
            <RiArrowRightSLine />
          </IconWrapper>
        </ViewMissionsLink>
      </InfoSectionWrapper>
    </Container>
  );
};

export default BoosterCard;