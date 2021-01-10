import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { Mission } from '../model/Mission'
import moment from 'moment'

interface EditMissionModalProps {
  mission: Mission
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

const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 1rem;
`

const EditMissionModal: React.FC<EditMissionModalProps> = ({
  mission,
  isOpen,
  onClose,
}) => {
  const [missionName, setMissionName] = useState<string>(mission.missionName)
  const [launchDate, setLaunchDate] = useState<Date>(mission.launchDate)
  const [missionStatus, setMissionStatus] = useState<string>(
    mission.missionStatus
  )
  const [landingStatus, setLandingStatus] = useState<string>(
    mission.landingStatus
  )
  const [missionPatchSrc, setMissionPatchSrc] = useState<string>(
    mission.missionPatchSrc
  )
  const [completedRequest, setCompletedRequest] = useState<boolean>(false)

  const updateMission = async (e: any) => {
    e.preventDefault()
    try {
      const body = {
        missionName,
        launchDate,
        missionStatus,
        landingStatus,
        missionPatchSrc,
      }
      const response = await fetch(
        'http://localhost:5001/missions/' + mission.missionId,
        {
          method: 'PUT',
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
        <ModalTitle>Edit Mission</ModalTitle>
        <ModalForm>
          <ModalFormLabel>Mission Name</ModalFormLabel>
          <ModalInput
            value={missionName}
            onChange={(e) => setMissionName(e.target.value)}
          />
          <ModalFormLabel>Launch Date</ModalFormLabel>
          <ModalInput
            value={moment(launchDate).format('LL')}
            onChange={(e) => setLaunchDate(new Date(e.target.value))}
          />
          <ModalFormLabel>Mission Status</ModalFormLabel>
          <ModalInput
            value={missionStatus}
            onChange={(e) => setMissionStatus(e.target.value)}
          />
          <ModalFormLabel>Landing Status</ModalFormLabel>
          <ModalInput
            value={landingStatus}
            onChange={(e) => setLandingStatus(e.target.value)}
          />
          <ModalFormLabel>Mission Patch Source</ModalFormLabel>
          <ModalInput
            value={missionPatchSrc}
            onChange={(e) => setMissionPatchSrc(e.target.value)}
          />
        </ModalForm>
        {completedRequest ? <StatusText>Added Mission</StatusText> : null}
        <ButtonGroupWrapper>
          <ModalButton onClick={(e) => updateMission(e)}>Edit</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonGroupWrapper>
      </ModalContainer>
    </Modal>
  )
}

export default EditMissionModal
