import React from 'react'
import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: 1440px) {
    min-width: 300px;
  }
`

const SearchBarForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SearchInput = styled.input`
  display: flex;
  width: 100%;
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

interface SearchBarProps {
  onSubmit: () => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  inputValue: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
  onChange,
  inputValue,
}) => {
  return (
    <Container>
      <SearchBarForm onSubmit={(e) => e.preventDefault()}>
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
