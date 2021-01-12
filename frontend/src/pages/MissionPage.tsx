import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import DeleteConfirmationModal from '../components/modals/DeleteConfirmationModal'
import EditMissionModal from '../components/modals/EditMissionModal'
import MissionCard from '../components/MissionCard'
import { TitleText } from '../components/styled/TitleText'
import { Mission } from '../model/Mission'

interface MissionPageParams {
  id: string
}

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

const MissionPage: React.FC = () => {
  const [mission, setMission] = useState<Mission>()
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>()
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false)
  let history = useHistory()
  let { id } = useParams<MissionPageParams>()

  const toggleEditModal = () => {
    setEditModalIsOpen(!editModalIsOpen)
  }

  const toggleDeleteConfirmationModal = () => {
    setDeleteModalIsOpen(!deleteModalIsOpen)
  }

  const deleteMission = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    try {
      const url = 'http://localhost:5001/missions/' + id
      await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      history.push('/missions')
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    const getMission = async () => {
      try {
        const url = 'http://localhost:5001/missions/' + id
        const response = await fetch(url)
        const jsonData = await response.json()
        const retrievedData = jsonData[0]
        const missionObject: Mission = {
          missionId: retrievedData['missionId'],
          missionName: retrievedData['missionName'],
          launchDate: retrievedData['launchDate'],
          boosterId: retrievedData['boosterId'],
          missionStatus: retrievedData['missionStatus'],
          landingStatus: retrievedData['landingStatus'],
          missionPatchSrc: retrievedData['missionPatchSrc'],
        }
        setMission(missionObject)
      } catch (error) {
        console.error(error.message)
      }
    }

    getMission()
  }, [])

  return (
    <Container>
      <TitleText>{mission?.missionName}</TitleText>
      <ButtonGroupWrapper>
        <Button type="edit" text="Mission" onClick={toggleEditModal} />
        <Button
          type="delete"
          text="Mission"
          onClick={toggleDeleteConfirmationModal}
        />
      </ButtonGroupWrapper>
      {deleteModalIsOpen ? (
        <DeleteConfirmationModal
          onConfirm={deleteMission}
          isOpen={deleteModalIsOpen}
          onClose={toggleDeleteConfirmationModal}
        />
      ) : null}
      {editModalIsOpen ? (
        <EditMissionModal
          mission={mission!}
          isOpen={editModalIsOpen}
          onClose={toggleEditModal}
        />
      ) : null}
      {mission ? <MissionCard mission={mission} /> : null}
    </Container>
  )
}

export default MissionPage
