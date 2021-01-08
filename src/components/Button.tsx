import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  type: string
  text: string
  onClick?: () => void
}

const AddButtonContainer = styled.button`
  font-weight: normal;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  border-radius: 3px;
  color: #2c51b8;
  border: 1px solid #2c51b8;
  background-color: white;
  cursor: pointer;
  padding: 0.8rem 0.3rem;
  margin: 0.3rem 0.3rem;

  @media screen and (min-width: 1440px) {
    min-width: 300px;
  }
`

const EditButtonContainer = styled(AddButtonContainer)`
  color: white;
  background-color: #2c51b8;
  border: none;
`

const DeleteButtonContainer = styled(AddButtonContainer)`
  color: white;
  background-color: #ff4059;
  border: none;
`

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  const renderButton = () => {
    switch (type) {
      case 'add':
        return (
          <AddButtonContainer onClick={onClick}>Add {text}</AddButtonContainer>
        )
      case 'edit':
        return (
          <EditButtonContainer onClick={onClick}>
            Edit {text}
          </EditButtonContainer>
        )
      case 'delete':
        return (
          <DeleteButtonContainer onClick={onClick}>
            Delete {text}
          </DeleteButtonContainer>
        )
    }
  }

  return <div>{renderButton()}</div>
}

export default Button
