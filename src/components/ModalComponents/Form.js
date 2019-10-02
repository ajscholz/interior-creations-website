import React from "react"
import styled from "styled-components"

const Form = props => {
  const { className, onSubmit, setFocus } = props

  return (
    <form className={className}>
      First Name: <br />
      <input type="text" name="firstname" ref={setFocus} />
      LastName: <br />
      <input type="text" name="lastname" />
      Email: <br />
      <input type="email" name="email" />
      <button onClick={e => onSubmit(e)}>Submit</button>
    </form>
  )
}

export default styled(Form)`
  & input {
    display: block;
    margin-bottom: 1rem;
  }
`
