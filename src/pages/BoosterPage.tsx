import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Booster } from '../model/Booster'
import { useParams } from 'react-router-dom'
import MissionCard from '../components/MissionCard'
import { Mission } from '../model/Mission'
import Button from '../components/Button'
import EditBoosterModal from '../components/EditBoosterModal'

const Container = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const BoosterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 10vw;
  width: max-content;
  margin: 2rem 2rem;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 3rem;

  @media screen and (max-width: 1010px) {
    flex-direction: column;
  }
`

const MissionsList = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

interface BoosterRouteParams {
  id: string
}

const BoosterPage: React.FC = () => {
  const [booster, setBooster] = useState<Booster[]>([])
  const [missions, setMissions] = useState<Mission[]>([])
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>()
  let { id } = useParams<BoosterRouteParams>()

  const toggleEditModal = () => {
    setEditModalIsOpen(!editModalIsOpen)
  }

  const getBooster = async () => {
    try {
      const url = 'http://localhost:5001/boosters/' + id
      const response = await fetch(url)
      const jsonData = await response.json()
      setBooster(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  const getMissions = async () => {
    try {
      const url = 'http://localhost:5001/missions/findbybooster/' + id
      const response = await fetch(url)
      const jsonData = await response.json()
      setMissions(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getBooster()
    getMissions()
  }, [])

  return (
    <Container>
      <BoosterTitle>
        Booster{' '}
        {booster.map((item: Booster, value: number) => item.boosterName)}
      </BoosterTitle>
      <ButtonGroup>
        <Button type="add" text="Mission" />
        <Button type="edit" text="Booster" onClick={toggleEditModal} />
        <Button type="delete" text="Booster" />
      </ButtonGroup>
      <MissionsList>
        {missions.map((item: Mission, index: number) => (
          <MissionCard mission={item} key={index} />
        ))}
      </MissionsList>
      {editModalIsOpen ? (
        <EditBoosterModal
          booster={booster[0]}
          isOpen={editModalIsOpen}
          onClose={toggleEditModal}
        />
      ) : null}
    </Container>
  )
}

export default BoosterPage
