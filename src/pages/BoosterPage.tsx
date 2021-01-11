import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Booster } from '../model/Booster'
import { useHistory, useParams } from 'react-router-dom'
import MissionCard from '../components/MissionCard'
import { Mission } from '../model/Mission'
import Button from '../components/Button'
import EditBoosterModal from '../components/EditBoosterModal'
import AddMissionModal from '../components/AddMissionModal'
import DeleteConfirmationModal from '../components/DeleteConfirmationModal'
import { TitleText } from '../components/styled/TitleText'

const Container = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 3rem;

  @media screen and (max-width: 1010px) {
    flex-direction: column;
  }
`

const MissionsListWrapper = styled.div`
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

const NoMissionsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 8vw;
  width: max-content;
  margin: 2rem 2rem;
`

interface BoosterRouteParams {
  id: string
}

const BoosterPage: React.FC = () => {
  const [booster, setBooster] = useState<Booster[]>([])
  const [missions, setMissions] = useState<Mission[]>([])
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false)
  const [addMissionModalIsOpen, setAddMissionModalIsOpen] = useState<boolean>(
    false
  )
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false)
  let history = useHistory()
  let { id } = useParams<BoosterRouteParams>()

  const toggleEditModal = () => {
    setEditModalIsOpen(!editModalIsOpen)
  }

  const toggleAddMissionModal = () => {
    setAddMissionModalIsOpen(!addMissionModalIsOpen)
  }

  const toggleDeleteConfirmationModal = () => {
    setDeleteModalIsOpen(!deleteModalIsOpen)
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

  const deleteBooster = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    try {
      const url = 'http://localhost:5001/boosters/' + id
      const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      history.push('/boosters')
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
      <TitleText>
        Booster{' '}
        {booster.map((item: Booster, value: number) => item.boosterName)}
      </TitleText>
      <ButtonGroupWrapper>
        <Button type="add" text="Mission" onClick={toggleAddMissionModal} />
        <Button type="edit" text="Booster" onClick={toggleEditModal} />
        <Button
          type="delete"
          text="Booster"
          onClick={toggleDeleteConfirmationModal}
        />
      </ButtonGroupWrapper>
      <MissionsListWrapper>
        {missions.map((item: Mission, index: number) => (
          <MissionCard mission={item} key={index} />
        ))}
        {missions.length === 0 ? (
          <NoMissionsText>No Missions</NoMissionsText>
        ) : null}
      </MissionsListWrapper>
      {editModalIsOpen ? (
        <EditBoosterModal
          booster={booster[0]}
          isOpen={editModalIsOpen}
          onClose={toggleEditModal}
        />
      ) : null}
      {addMissionModalIsOpen ? (
        <AddMissionModal
          booster={booster[0]}
          isOpen={addMissionModalIsOpen}
          onClose={toggleAddMissionModal}
        />
      ) : null}
      {deleteModalIsOpen ? (
        <DeleteConfirmationModal
          onConfirm={deleteBooster}
          isOpen={deleteModalIsOpen}
          onClose={toggleDeleteConfirmationModal}
        />
      ) : null}
    </Container>
  )
}

export default BoosterPage
