import React from 'react'
import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`

const SearchBarForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-right: 50px;
`

const SearchInput = styled.input`
  height: 30px;
  font-weight: bolder;
  outline: none;
`

const SearchButton = styled.button`
  width: fit-content;
  background-color: #2c51b8;
  border: none;
  outline: none;
  cursor: pointer;
`

const IconWrapper = styled.div`
  transform: translate(20%, 5%);
  margin-right: 5px;
  color: white;
`

const SearchBarLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  margin-right: 10px;
`

interface SearchBarProps {
  onSubmit: () => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  inputValue: string
  label: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
  onChange,
  inputValue,
  label,
}) => {
  return (
    <Container>
      <SearchBarForm onSubmit={(e) => e.preventDefault()}>
        <SearchBarLabel>{label}</SearchBarLabel>
        <SearchInput type="text" onChange={onChange} value={inputValue} />
        <SearchButton onClick={onSubmit}>
          <IconWrapper>
            <BiSearchAlt />
          </IconWrapper>
        </SearchButton>
      </SearchBarForm>
    </Container>
  )
}

export default SearchBar
