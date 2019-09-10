import styled from "styled-components"

const scale = 1.2

const TypeBase = {
  margin: "2.75rem 0 1rem",
  fontFamily: "Cinzel, serif",
  fontWeight: "400",
  lineHeight: "1.15",
}

export const H1 = styled.h1`
  ${TypeBase}
  margin-top: 0;
  font-size: 2.441em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};

  /* specific use case for smallest screen sizes */
  @media (max-width: 350px) {
    font-size: 2em;
  }
`

export const H2 = styled.h2`
  ${TypeBase}
  font-size: 1.953em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};

  /* specific use case for smallest screen sizes */
  @media (max-width: 350px) {
    font-size: 1.7em;
  }
`

export const H3 = styled.h3`
  ${TypeBase}
  font-size: 1.563em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};

  /* specific use case for smallest screen sizes */
  @media (max-width: 350px) {
    font-size: 1.4em;
  }
`

export const H4 = styled.h4`
  ${TypeBase}
  font-size: 1.25em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};

  /* specific use case for smallest screen sizes */
  @media (max-width: 350px) {
    font-size: 1.2em;
  }
`

export const H5 = styled.h5`
  ${TypeBase}
  font-size: 0.8em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
`

export const H6 = styled.h6`
  ${TypeBase}
  font-size: 0.64em;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
`

export const P = styled.p`
  font-weight: 200;
  font-size: ${props => props.small && "0.833em"};
  margin-bottom: 1.25em;
`
