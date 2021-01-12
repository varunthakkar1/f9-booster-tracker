import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #2c51b8;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const NavLinksWrapper = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(Link)`
  display: flex;
  color: white;
  cursor: pointer;
  font-size: 25px;
  text-decoration: none;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`

const SlideoutLink = styled(Link)`
  display: flex;
  color: white;
  cursor: pointer;
  font-size: 50px;
  text-decoration: none;
  margin: 2rem 0rem;
  border-bottom: 1px solid black;
`

const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  color: white;
  justify-content: right;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1050px) {
    display: flex;
    position: absolute;
    right: 3rem;
    top: 25px;
  }
`

const SlideoutMenu = styled.div<{ show: boolean }>`
  display: flex;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ show }) => (show ? '100vw' : '0')};
  height: 100vh;
  flex-direction: column;
  background-color: darkgray;
  z-index: 1;
  opacity: 95;
  transition: transform 500ms;
  transform: ${({ show }) => (show ? 'translateX(0%)' : 'translateX(100%)')};
`

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false)

  const toggleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <Container>
      <NavLinksWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/boosters">Boosters</NavLink>
        <NavLink to="/missions">Missions</NavLink>
      </NavLinksWrapper>
      <HamburgerMenuIcon size={40} onClick={toggleShowLinks} />
      <SlideoutMenu show={showLinks}>
        <SlideoutLink to="/" onClick={toggleShowLinks}>
          Home
        </SlideoutLink>
        <SlideoutLink to="/boosters" onClick={toggleShowLinks}>
          Boosters
        </SlideoutLink>
        <SlideoutLink to="/missions" onClick={toggleShowLinks}>
          Missions
        </SlideoutLink>
      </SlideoutMenu>
    </Container>
  )
}

export default Navbar
