import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MissionCard from '../components/MissionCard'
import { TitleText } from '../components/styled/TitleText'
import { Mission } from '../model/Mission'

const Container = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  margin: none;
  padding: none;
  flex-wrap: wrap;
`

const MissionsListWrapper = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

interface MissionsPageProps {}

const MissionsPage: React.FC<MissionsPageProps> = () => {
  const [missions, setMissions] = useState<Mission[]>([])

  const getMissions = async () => {
    try {
      const response = await fetch('http://localhost:5001/missions')
      const jsonData = await response.json()
      setMissions(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getMissions()
  }, [])

  return (
    <Container>
      <TitleText>Missions</TitleText>
      <MissionsListWrapper>
        {missions.map((mission: Mission, index: number) => (
          <MissionCard mission={mission} key={index} />
        ))}
      </MissionsListWrapper>
    </Container>
  )
}

export default MissionsPage
