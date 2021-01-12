import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FalconNineTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url('//live.staticflickr.com/65535/49185149122_2922a0ecc4_h.jpg');
`

const TitleText = styled.div`
  font-size: 100px;
  font-weight: bolder;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 70px;
  }

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`

const ViewBoostersLink = styled(Link)`
  display: flex;
  color: white;
  font-size: 40px;
  font-weight: normal;
  margin-top: 0.5rem;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  text-decoration: none;

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 33px;
  }

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`

const IconWrapper = styled.div`
  transform: translate(0%, 8%);
`

const QuoteCard = styled(FalconNineTitleCard)`
  background-image: url('//live.staticflickr.com/5789/29343825184_a0dd2ee5b0_h.jpg');
`

const QuoteText = styled.div`
  display: flex;
  color: white;
  font-size: 32px;
  font-weight: normal;
  text-align: center;
  margin-top: 1rem;

  @media screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 25px;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`

const BoldQuoteText = styled(QuoteText)`
  font-weight: bold;
`

const HomePage: React.FC = () => {
  return (
    <Container>
      <FalconNineTitleCard>
        <TitleText>Falcon 9 Booster Tracker</TitleText>
        <ViewBoostersLink to="/boosters">
          View Boosters
          <IconWrapper>
            <RiArrowRightSLine />
          </IconWrapper>
        </ViewBoostersLink>
      </FalconNineTitleCard>
      <QuoteCard>
        <QuoteText>
          "If there are two futures, and one future is we are out there among
          the stars...
        </QuoteText>
        <QuoteText>
          and we're going to see what other planets are like...
        </QuoteText>
        <QuoteText>
          and the scope and scale of consciousness is expanded across many
          civilizations...
        </QuoteText>
        <BoldQuoteText>this is a great future...</BoldQuoteText>
        <BoldQuoteText>this is a wonderful thing.</BoldQuoteText>
        <BoldQuoteText>And that's what we should strive for."</BoldQuoteText>
        <QuoteText>- Elon Musk</QuoteText>
      </QuoteCard>
    </Container>
  )
}

export default HomePage
