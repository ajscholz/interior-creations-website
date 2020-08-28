import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import links from "../utils/links"
// import ModalController from "./ModalComponents/ModalController"
// import ProjectForm from "./FormComponents/ProjectForm"

import CallTextButtons from "./CallTextButtons"

const NavList = ({ setMenuOpen }) => (
  <List>
    {links.map(link => (
      <NavItem
        onClick={setMenuOpen ? () => setMenuOpen(false) : null}
        key={link.key}
      >
        <Link to={link.path}>{link.title}</Link>
      </NavItem>
    ))}
  </List>
)

export const MobileNavigation = ({ open, setMenuOpen }) => {
  const expandMenu = useSpring({
    to: async next => {
      await next(open ? { display: "flex" } : { opacity: 0 })
      await next(open ? { opacity: 1 } : { display: "none" })
    },
    from: { display: "none", opacity: 0 },
  })

  return (
    <MobileWrapper style={expandMenu}>
      <nav>
        <NavList setMenuOpen={setMenuOpen} />
      </nav>

      {/* <ModalController
        buttonText="Start Project"
        buttonStyle="solid"
        parentClick={click}
      > 
        <ProjectForm />
      </ModalController> */}
      <CallTextButtons setMenuOpen={setMenuOpen} />
    </MobileWrapper>
  )
}

const Navigation = ({ className }) => {
  return (
    <div className={className}>
      <DesktopWrapper>
        <NavList />
      </DesktopWrapper>
      {/* <ModalController buttonText="Start Project" buttonStyle="solid">
        <ProjectForm />
      </ModalController> */}
      <CallTextButtons />
    </div>
  )
}

export default styled(Navigation)`
  display: none;
  align-items: center;

  @media (min-width: 662px) {
    display: flex;
  }

  & .modal-controller-button {
    font-family: Cinzel;
    padding: 0.5rem 3rem;
    color: var(--primary);
    font-size: 1.5rem;

    @media (min-width: 662px) {
      padding: 0.35rem 0.8rem;
      font-size: 0.8rem;
    }
    @media (min-width: 768px) {
      font-size: 0.9rem;
      padding: 0.35rem 1.5rem;
    }
    @media (min-width: 992px) {
      font-size: 1rem;
    }
  }
`

const DesktopWrapper = styled.nav`
  display: none;
  color: var(--black);
  @media (min-width: 662px) {
    display: block;
  }
`

const MobileWrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 250;
  padding-bottom: 20%;
  background: var(--transWhite);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  backdrop-filter: blur(4px);
  @media (min-width: 662px) {
    display: none;
  }

  & .modal-controller-button {
    font-family: Cinzel;
    font-size: 1.5rem;
    color: var(--black);
    text-transform: capitalize;
    text-align: center;
    width: 90%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  @media (min-width: 662px) {
    display: flex;
  }
`

const NavItem = styled.li`
  font-family: Cinzel;
  font-size: 1.5rem;
  color: var(--black);
  text-transform: capitalize;
  text-align: center;
  margin: 2rem;
  cursor: pointer;

  & > a {
    font-size: inherit;
    color: inherit;
    position: relative;
    &[aria-current="page"] {
      color: var(--secondary);
      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 1px;
        width: 100%;
        background: var(--secondary);
      }
    }
  }
  @media (min-width: 662px) {
    margin: 0;
    text-align: right;
    font-size: 0.8rem;
    color: var(--black);
    margin-right: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`
