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
`

const ModalForm = styled.form`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`

const ModalInput = styled.input`
  border-radius: 4px;
  width: 80%;
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
    <Modal isOpen={isOpen} style={customStyles}>
      <ModalContainer>
        <ModalForm>
          <ModalInput
            value={boosterName}
            onChange={(e) => setBoosterName(e.target.value)}
          />
          <ModalInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ModalInput
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
          />
          <ModalInput
            value={imageCaption}
            onChange={(e) => setImageCaption(e.target.value)}
          />
        </ModalForm>
        <button onClick={onClose}>close</button>
      </ModalContainer>
      Testing
    </Modal>
  )
}

export default EditBoosterModal
