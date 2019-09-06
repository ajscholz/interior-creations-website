import React from "react"
import styled from "styled-components"

import links from "../utils/links"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const NavList = ({ click }) => (
  <List>
    {links.map(link => (
      <>
        {typeof link.path === "function" ? (
          <NavLink key={link.key} onClick={link.path}>
            {link.title}
          </NavLink>
        ) : (
          <NavLink key={link.key} onClick={click ? () => click(false) : null}>
            <Link to={link.path}>{link.title}</Link>
          </NavLink>
        )}
      </>
    ))}
  </List>
)

export const MobileNavigation = props => {
  const { open, click } = props

  const expandMenu = useSpring({
    to: async next => {
      await next(open ? { display: "flex" } : { opacity: 0 })
      await next(open ? { opacity: 1 } : { display: "none" })
    },
    from: { display: "none", opacity: 0 },
  })

  return (
    <MobileWrapper open={open} style={expandMenu}>
      <NavList click={click} />
    </MobileWrapper>
  )
}

export const DesktopNavigation = () => {
  return (
    <DesktopWrapper>
      <NavList />
    </DesktopWrapper>
  )
}

const DesktopWrapper = styled.nav`
  display: none;
  color: var(--black);
  @media (min-width: 662px) {
    display: block;
  }
`

const MobileWrapper = styled(animated.nav)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 250;
  background: var(--transWhite);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  backdrop-filter: blur(2px);
  @media (min-width: 662px) {
    display: none;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  @media (min-width: 662px) {
    display: flex;
  }
`

const NavLink = styled.li`
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
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`
