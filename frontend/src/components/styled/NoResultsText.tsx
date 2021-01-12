import styled from 'styled-components'

export const NoResultsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 8vw;
  width: max-content;
  margin: 2rem 2rem;

  @media screen and (max-width: 650px) {
    font-size: 50px;
  }
`
