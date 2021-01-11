import React, { useState } from 'react'
import { Booster } from '../model/Booster'
import Modal from 'react-modal'
import styled from 'styled-components'
import { ModalButton } from './styled/ModalButton'
import { ModalInput } from './styled/ModalInput'
import { modalStyle } from '../styles/modalStyle'

interface AddMissionModalProps {
  booster: Booster
  isOpen: boolean
  onClose: () => void
}

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
`

const ModalTitle = styled.div`
  display: flex;
  justify-content: left;
  font-size: 30px;
  font-weight: bolder;
  width: 90%;
  margin: 1rem 1rem;
`

const ModalForm = styled.form`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 95%;
`

const ModalFormLabel = styled.label`
  width: 80%;
  display: flex;
  justify-content: left;
  margin: 0rem 1rem;
  font-weight: bold;
`

const StatusText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  width: 90%;
  color: green;
  margin: 1rem 0rem;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 1rem;
`

const AddMissionModal: React.FC<AddMissionModalProps> = ({
  booster,
  isOpen,
  onClose,
}) => {
  const [missionName, setMissionName] = useState<string>()
  const [launchDate, setLaunchDate] = useState<Date>()
  const [missionStatus, setMissionStatus] = useState<string>()
  const [landingStatus, setLandingStatus] = useState<string>()
  const [missionPatchSrc, setMissionPatchSrc] = useState<string>()
  const [completedRequest, setCompletedRequest] = useState<boolean>(false)

  const addMission = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault()
    try {
      const boosterId = booster.boosterId
      const body = {
        missionName,
        launchDate,
        missionStatus,
        landingStatus,
        missionPatchSrc,
        boosterId,
      }
      const response = await fetch('http://localhost:5001/missions/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      response.status === 200
        ? setCompletedRequest(true)
        : setCompletedRequest(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Modal isOpen={isOpen} style={modalStyle} ariaHideApp={false}>
      <ModalContainer>
        <ModalTitle>Add Mission</ModalTitle>
        <ModalForm>
          <ModalFormLabel>Mission Name</ModalFormLabel>
          <ModalInput onChange={(e) => setMissionName(e.target.value)} />
          <ModalFormLabel>Launch Date</ModalFormLabel>
          <ModalInput
            onChange={(e) => setLaunchDate(new Date(e.target.value))}
          />
          <ModalFormLabel>Mission Status</ModalFormLabel>
          <ModalInput onChange={(e) => setMissionStatus(e.target.value)} />
          <ModalFormLabel>Landing Status</ModalFormLabel>
          <ModalInput onChange={(e) => setLandingStatus(e.target.value)} />
          <ModalFormLabel>Mission Patch Source</ModalFormLabel>
          <ModalInput onChange={(e) => setMissionPatchSrc(e.target.value)} />
        </ModalForm>
        {completedRequest ? <StatusText>Added Mission</StatusText> : null}
        <ButtonGroup>
          <ModalButton onClick={(e) => addMission(e)}>Add</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonGroup>
      </ModalContainer>
    </Modal>
  )
}

export default AddMissionModal
