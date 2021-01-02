import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BoosterCard from '../components/BoosterCard'
import { Booster } from '../model/Booster'
import SearchBar from '../components/SearchBar'

const Container = styled.div`
  font-family: 'Overpass', sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: none;
  padding: none;
`

const BoostersListWrapper = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  width: 100%;
`

const TitleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 2rem;
  background-image: url('//live.staticflickr.com/4654/25254688767_1c6f195789_3k.jpg');
  background-position: center;
  background-size: 1920px 1440px;

  @media screen and (min-width: 1650px) {
    background-size: 1920px 1440px;
    background-position: 0px 0px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1650px) {
    background-size: 1920px 1440px;
    background-position: -250px -150px;
  }

  @media screen and (max-width: 715px) {
    background-position: -200px 0px;
  }
`

const TitleText = styled.div`
  font-size: 120px;
  font-weight: bolder;
  color: white;
`

const BoostersPage: React.FC = () => {
  const [boosters, setBoosters] = useState([])
  const [searchBarInput, setSearchBarInput] = useState('')

  const getBoosters = async () => {
    try {
      const response = await fetch('http://localhost:5001/boosters')
      const jsonData = await response.json()
      setBoosters(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  const getBoostersByName = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/boosters/find/'${searchBarInput}'`
      )
      const jsonData = await response.json()
      setBoosters(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchBarInput(e.currentTarget.value)
  }

  useEffect(() => {
    getBoosters()
  }, [])

  return (
    <Container>
      <TitleCard>
        <TitleText>Boosters</TitleText>
      </TitleCard>
      <SearchBar
        onSubmit={getBoostersByName}
        onChange={handleChange}
        inputValue={searchBarInput}
        label="Search by booster name"
      />
      <BoostersListWrapper>
        {boosters.map((item: Booster, index: number) => (
          <BoosterCard booster={item} key={index} />
        ))}
      </BoostersListWrapper>
    </Container>
  )
}

export default BoostersPage
