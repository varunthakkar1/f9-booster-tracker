import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MissionCard from '../components/MissionCard'
import { Mission } from '../model/Mission'

const Container = styled.div`
  font-family: 'Overpass', sans-serif;
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  margin: none;
  padding: none;
  flex-wrap: wrap;
`

interface MissionsPageProps {}

const MissionsPage: React.FC<MissionsPageProps> = () => {
  const [missions, setMissions] = useState([])

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
      {missions.map((mission: Mission, index: number) => (
        <MissionCard mission={mission} key={index} />
      ))}
    </Container>
  )
}

export default MissionsPage
