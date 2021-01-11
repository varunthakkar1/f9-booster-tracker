import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MissionCard from '../components/MissionCard'
import SearchBar from '../components/SearchBar'
import { NoResultsText } from '../components/styled/NoResultsText'
import { TitleText } from '../components/styled/TitleText'
import { Mission } from '../model/Mission'

const Container = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: none;
  padding: none;
  flex-wrap: wrap;
  flex-direction: column;
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
  const [searchBarInput, setSearchBarInput] = useState<string>('')

  const getMissions = async () => {
    try {
      const response = await fetch('http://localhost:5001/missions')
      const jsonData = await response.json()
      setMissions(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  const getMissionsByName = async () => {
    try {
      if (searchBarInput.trim() === '') {
        getMissions()
      } else {
        const response = await fetch(
          `http://localhost:5001/missions/find/${searchBarInput}`
        )
        const jsonData = await response.json()
        setMissions(jsonData)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchBarInput(e.currentTarget.value)
  }

  useEffect(() => {
    getMissions()
  }, [])

  return (
    <Container>
      <TitleText>Missions</TitleText>
      <SearchBar
        onChange={handleChange}
        onSubmit={getMissionsByName}
        inputValue={searchBarInput}
      />
      <MissionsListWrapper>
        {missions.map((mission: Mission, index: number) => (
          <MissionCard mission={mission} key={index} />
        ))}
      </MissionsListWrapper>
      {missions.length === 0 ? (
        <NoResultsText>No Missions Found</NoResultsText>
      ) : null}
    </Container>
  )
}

export default MissionsPage
