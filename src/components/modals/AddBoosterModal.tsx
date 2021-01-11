import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { modalStyle } from '../../styles/modalStyle'
import { ModalInput } from '../styled/ModalInput'
import { ModalButton } from '../styled/ModalButton'

interface AddBoosterModalProps {
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

const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 1rem;
`

const AddBoosterModal: React.FC<AddBoosterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [boosterName, setBoosterName] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [imageSrc, setImageSrc] = useState<string>()
  const [imageCaption, setImageCaption] = useState<string>()
  const [completedRequest, setCompletedRequest] = useState<boolean>(false)

  const addBooster = async (e: any) => {
    e.preventDefault()
    try {
      const body = { boosterName, description, imageSrc, imageCaption }
      const response = await fetch('http://localhost:5001/boosters/', {
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
        <ModalTitle>Add Booster</ModalTitle>
        <ModalForm>
          <ModalFormLabel>Booster Name</ModalFormLabel>
          <ModalInput onChange={(e) => setBoosterName(e.target.value)} />
          <ModalFormLabel>Description</ModalFormLabel>
          <ModalInput onChange={(e) => setDescription(e.target.value)} />
          <ModalFormLabel>Image Source</ModalFormLabel>
          <ModalInput onChange={(e) => setImageSrc(e.target.value)} />
          <ModalFormLabel>Image Caption</ModalFormLabel>
          <ModalInput onChange={(e) => setImageCaption(e.target.value)} />
        </ModalForm>
        {completedRequest ? <StatusText>Added Booster</StatusText> : null}
        <ButtonGroupWrapper>
          <ModalButton onClick={(e) => addBooster(e)}>Add</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonGroupWrapper>
      </ModalContainer>
    </Modal>
  )
}

export default AddBoosterModal
