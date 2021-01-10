import React, { useState } from 'react'
import { Booster } from '../model/Booster'
import Modal from 'react-modal'
import styled from 'styled-components'

interface EditBoosterModalProps {
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

const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 1rem;
`

const EditBoosterModal: React.FC<EditBoosterModalProps> = ({
  booster,
  isOpen,
  onClose,
}) => {
  const [boosterName, setBoosterName] = useState<string>(booster.boosterName)
  const [description, setDescription] = useState<string>(booster.description)
  const [imageSrc, setImageSrc] = useState<string>(booster.imageSrc)
  const [imageCaption, setImageCaption] = useState<string>(booster.imageCaption)
  const [completedRequest, setCompletedRequest] = useState<boolean>(false)

  const updateBooster = async (e: any) => {
    e.preventDefault()
    try {
      const body = { boosterName, description, imageSrc, imageCaption }
      const response = await fetch(
        'http://localhost:5001/boosters/' + booster.boosterId,
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
        <ModalTitle>Edit Booster</ModalTitle>
        <ModalForm>
          <ModalFormLabel>Booster Name</ModalFormLabel>
          <ModalInput
            value={boosterName}
            onChange={(e) => setBoosterName(e.target.value)}
          />
          <ModalFormLabel>Description</ModalFormLabel>
          <ModalInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ModalFormLabel>Image Source</ModalFormLabel>
          <ModalInput
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
          />
          <ModalFormLabel>Image Caption</ModalFormLabel>
          <ModalInput
            value={imageCaption}
            onChange={(e) => setImageCaption(e.target.value)}
          />
        </ModalForm>
        {completedRequest ? <StatusText>Updated Booster</StatusText> : null}
        <ButtonGroupWrapper>
          <ModalButton onClick={(e) => updateBooster(e)}>Update</ModalButton>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ButtonGroupWrapper>
      </ModalContainer>
    </Modal>
  )
}

export default EditBoosterModal
