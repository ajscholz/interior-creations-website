import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Avatar from "./Avatar"
import { H3, P } from "./Typography"

const TeamMember = props => {
  const { className, person } = props
  const { name, image, profile } = person

  return (
    <div className={className}>
      <Avatar image={image} alt={name} />
      <H3 color="var(--lightgray)">{name}</H3>
      <P>{profile.profile}</P>
    </div>
  )
}

TeamMember.propTypes = {
  person: PropTypes.shape({
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      profile: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default styled(TeamMember)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${Avatar} {
    width: 80%;
    max-width: 300px;
    margin-bottom: 2rem;
  }

  & ${P} {
    text-align: center;
    margin-bottom: 0;
  }

  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  @media (min-width: 662px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 44px auto;
    grid-column-gap: 2rem;
    grid-template-areas:
      "image name"
      "image bio";

    & ${Avatar} {
      grid-area: image;
      width: 150px;
      margin: 0;
    }

    & ${H3} {
      grid-area: name;
      margin-top: 0;
    }

    & ${P} {
      grid-area: bio;
      text-align: left;
    }
  }
`
