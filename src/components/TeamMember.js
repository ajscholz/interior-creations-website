import React from "react"
import PropTypes from 'prop-types'

import Avatar from "./Avatar"
import { H3, P } from "./Typography"

const TeamMember = props => {
  const {name, image, text} = props;

  return (
    <div>
      <Avatar image={image}/>
      <H3 color="var(--lightgray)">{name}</H3>
      <P>{text}</P>
    </div>
  )
}

TeamMember.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TeamMember
