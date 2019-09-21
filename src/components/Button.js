import styled from "styled-components"

const Button = styled.button`
  outline: none;
  display: block;
  border: 2px solid var(--primary);
  color: ${props => props.color || "var(--primary)"};
  text-transform: uppercase;
  font-size: ${props =>
    props.large ? "1rem" : props.small ? ".7rem" : ".85rem"};
  padding: 0.5rem 3rem;
  background: ${props => (props.solid ? "var(--primary)" : "transparent")};
  letter-spacing: 2px;
  font-weight: 400;
  margin: ${props => props.center && "0 auto"};
  cursor: pointer;
`

export default Button

export const NavbarButton = styled(Button)`
  font-family: Cinzel;
  text-transform: capitalize;
  text-align: center;
  margin: 0;
  padding: 0.5rem 3rem;
  color: var(--primary);
  background: none;
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
`
