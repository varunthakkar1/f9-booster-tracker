import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BoosterCard from '../components/BoosterCard'
import { Booster } from '../model/Booster'
import SearchBar from '../components/SearchBar'
import { TitleText } from '../components/styled/TitleText'

const Container = styled.div`
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

const NoBoostersText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 8vw;
  width: max-content;
  margin: 2rem 2rem;
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
      if (searchBarInput.trim() === "") {
        getBoosters()
      }
      else {
        const response = await fetch(
          `http://localhost:5001/boosters/find/${searchBarInput}`
        )
        const jsonData = await response.json()
        setBoosters(jsonData)
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
    getBoosters()
  }, [])

  return (
    <Container>
      <TitleText>Boosters</TitleText>
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
      {boosters.length === 0 ? <NoBoostersText>No Boosters Found</NoBoostersText> : null}
    </Container>
  )
}

export default BoostersPage
