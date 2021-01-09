import React, { useState } from 'react'
import { Booster } from '../model/Booster'
import Modal from 'react-modal'
import styled from 'styled-components'

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
  width: 100%;
`

const ModalInput = styled.input`
  border-radius: 4px;
  width: 90%;
  height: 2rem;
  margin: 0rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  outline: none;

  &:focus {
    border: 2.5px solid #2c51b8;
  }
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

const ModalButton = styled.div`
  background-color: #2c51b8;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 4px;
  height: 20px;
  font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
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
  const [launchDate, setLaunchDate] = useState<Date | undefined>()
  const [missionStatus, setMissionStatus] = useState<string>()
  const [landingStatus, setLandingStatus] = useState<string>()
  const [missionPatchSrc, setMissionPatchSrc] = useState<string>()
  const [completedRequest, setCompletedRequest] = useState<boolean>(false)

  const addMission = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    try {
      const boosterId = booster.boosterId;
      const body = { missionName, launchDate, missionStatus, landingStatus, missionPatchSrc, boosterId }
      const response = await fetch(
        'http://localhost:5001/missions/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      )
      response.status === 200
        ? setCompletedRequest(true)
        : setCompletedRequest(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <ModalContainer>
        <ModalTitle>Add Mission</ModalTitle>
        <ModalForm>
          <ModalFormLabel>Mission Name</ModalFormLabel>
          <ModalInput
            onChange={(e) => setMissionName(e.target.value)}
          />
          <ModalFormLabel>Launch Date</ModalFormLabel>
          <ModalInput
            onChange={(e) => setLaunchDate(new Date(e.target.value))}
          />
          <ModalFormLabel>Mission Status</ModalFormLabel>
          <ModalInput
            onChange={(e) => setMissionStatus(e.target.value)}
          />
          <ModalFormLabel>Landing Status</ModalFormLabel>
          <ModalInput
            onChange={(e) => setLandingStatus(e.target.value)}
          />
          <ModalFormLabel>Mission Patch Source</ModalFormLabel>
          <ModalInput
            onChange={(e) => setMissionPatchSrc(e.target.value)}
          />
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
