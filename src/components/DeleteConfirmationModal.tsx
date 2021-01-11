import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { ModalButton } from './styled/ModalButton'

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
`

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bolder;
  width: 90%;
  margin: 1rem 1rem;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin-top: 1rem;
`

interface DeleteConfirmationModalProps {
  onConfirm: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => Promise<void>
  isOpen: boolean
  onClose: () => void
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  onConfirm,
  isOpen,
  onClose,
}) => {
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
        <ModalTitle>Are you sure?</ModalTitle>
        <ButtonGroup>
          <ModalButton onClick={(e) => onConfirm(e)}>Yes</ModalButton>
          <ModalButton onClick={onClose}>No</ModalButton>
        </ButtonGroup>
      </ModalContainer>
    </Modal>
  )
}

export default DeleteConfirmationModal
