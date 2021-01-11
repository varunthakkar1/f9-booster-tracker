import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BoosterCard from '../components/BoosterCard'
import { Booster } from '../model/Booster'
import SearchBar from '../components/SearchBar'
import { TitleText } from '../components/styled/TitleText'
import { NoResultsText } from '../components/styled/NoResultsText'
import Button from '../components/Button'
import AddBoosterModal from '../components/modals/AddBoosterModal'

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

const BoostersPage: React.FC = () => {
  const [boosters, setBoosters] = useState([])
  const [searchBarInput, setSearchBarInput] = useState<string>('')
  const [addModalIsOpen, setAddModalIsOpen] = useState<boolean>()

  const toggleAddModal = () => {
    setAddModalIsOpen(!addModalIsOpen)
  }

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
      if (searchBarInput.trim() === '') {
        getBoosters()
      } else {
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
      <Button type="add" text="Booster" onClick={toggleAddModal} />
      <SearchBar
        onSubmit={getBoostersByName}
        onChange={handleChange}
        inputValue={searchBarInput}
      />
      <BoostersListWrapper>
        {boosters.map((item: Booster, index: number) => (
          <BoosterCard booster={item} key={index} />
        ))}
      </BoostersListWrapper>
      {addModalIsOpen ? (
        <AddBoosterModal isOpen={addModalIsOpen} onClose={toggleAddModal} />
      ) : null}
      {boosters.length === 0 ? (
        <NoResultsText>No Boosters Found</NoResultsText>
      ) : null}
    </Container>
  )
}

export default BoostersPage
