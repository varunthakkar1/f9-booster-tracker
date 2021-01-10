import React from 'react'
import styled from 'styled-components'
import { Mission } from '../model/Mission'
import { RiArrowRightSLine } from 'react-icons/ri'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

interface MissionCardProps {
  mission: Mission
}

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 375px;
  margin: 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
`

const MissionPatch = styled.img`
  display: flex;
  min-width: 65%;
  max-width: 85%;
  max-height: 320px;
  margin: 1rem;
`

const TitleText = styled.div`
  font-weight: bolder;
  display: flex;
  color: black;
  font-size: 40px;
`

const InfoText = styled.div`
  display: flex;
  font-size: 20px;
  color: #575757;
  margin-bottom: 0.2rem;
`

const MoreLink = styled.div`
  display: flex;
  color: #2c51b8;
  font-size: 23px;
  font-weight: normal;
  margin-bottom: 0.5rem;
  flex-wrap: nowrap;
  cursor: pointer;
`

const IconWrapper = styled.div`
  transform: translate(0%, 5%);
`

const InfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  let history = useHistory()

  return (
    <Container>
      <MissionPatch src={mission.missionPatchSrc} />
      <InfoSectionWrapper>
        <TitleText>{mission.missionName}</TitleText>
        <InfoText>{moment(mission.launchDate).format('LL')}</InfoText>
        <InfoText>{mission.missionStatus}</InfoText>
        <InfoText>{mission.landingStatus}</InfoText>
        <MoreLink
          onClick={() => history.push('/missions/' + mission.missionId)}
        >
          More
          <IconWrapper>
            <RiArrowRightSLine />
          </IconWrapper>
        </MoreLink>
      </InfoSectionWrapper>
    </Container>
  )
}

export default MissionCard
