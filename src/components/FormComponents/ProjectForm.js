import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import FocusTrapReact from "focus-trap-react"

import ProgressBar from "./ProgressBar"
import FormContainer from "./FormContainer"
import { PrevButton } from "./Buttons"
import { Formik, Form } from "formik"
import CloseButton from "../ModalComponents/CloseButton"
import { onKeyPress } from "../../utils/helpers"

import Submitting from "./Submitting"
import { P, H1 } from "../Typography"

import getFieldsArray from "./getFieldsArray"
import Button from "../Button"

const isValidEmail = value =>
  !value
    ? true
    : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        value
      )
    ? true
    : false
const isValidValue = value => (!value ? true : false)

const ProjectForm = props => {
  const { handleClose } = props
  const [question, setQuestion] = useState(0)
  const [accepted, setAccepted] = useState(null)

  var fieldsArray = []

  return (
    <FocusTrapReact>
      <Frame tabIndex="-1" onKeyDown={e => onKeyPress(e, handleClose)}>
        {accepted === null && (
          <Header>
            <H1>Bring Your Dream To Life</H1>
            <P>Complete these few simple questions and we'll get in touch</P>
          </Header>
        )}
        <FormContainer>
          {/* <ProjectForm
            // fields={questionFields[question]}
            setQuestion={setQuestion}
            question={question}
          /> */}
          <div style={{ marginBottom: ".75rem" }}>
            <Formik
              isInitialValid={false}
              initialValues={{
                type: "",
                name: "",
                email: "",
                phone: "",
              }}
              // validate={ values => {
              //   let errors = {};
              //   if (!values.email) {
              //     errors.email = 'Required';
              //   } else if (
              //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //   ) {
              //     errors.email = 'Invalid email address';
              //   }
              //   return errors;
              // } }
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response = await fetch(
                    "/.netlify/functions/contactUs",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        ...values,
                        // siteEmail: siteEmail,
                      }),
                    }
                  )
                  const data = await response.json()

                  if (response.ok) {
                    setSubmitting(false)
                    setAccepted(true)
                  } else {
                    setAccepted(false)
                    setSubmitting(false)
                    throw data.msg
                  }
                } catch (err) {
                  console.log(err)
                }
              }}
            >
              {props => {
                fieldsArray = getFieldsArray(
                  props,
                  question,
                  setQuestion,
                  isValidEmail,
                  isValidValue
                )

                return (
                  <>
                    {props.isSubmitting && <Submitting />}

                    {accepted === null && <Form>{fieldsArray[question]}</Form>}
                    {accepted && (
                      <div style={{ textAlign: "center" }}>
                        <H1>Thank You!</H1>
                        <P>
                          We've received your project request. We'll call you as
                          soon as we <em>aren't</em> busy making someone else's
                          dream come true!
                        </P>
                        <Button
                          solid
                          onClick={() => handleClose()}
                          style={{
                            margin: "0 auto",
                          }}
                        >
                          Close Form
                        </Button>
                      </div>
                    )}
                    {accepted === false && (
                      <div style={{ textAlign: "center" }}>
                        <H1>Sorry...</H1>
                        <P>
                          There was a problem with your form submission. Please
                          try submitting it again.
                        </P>
                        <Button
                          style={{
                            margin: "0 auto",
                          }}
                          solid
                          onClick={() => {
                            setQuestion(question - 1)
                            setAccepted(null)
                          }}
                        >
                          Go back
                        </Button>
                      </div>
                    )}
                  </>
                )
              }}
            </Formik>
          </div>

          <ProgressBar length={4} current={question} />
        </FormContainer>
        <CloseButton handleClose={() => handleClose()} />
        {question !== 0 && !accepted && (
          <PrevButton onClick={() => setQuestion(question - 1)} />
        )}
      </Frame>
    </FocusTrapReact>
  )
}

export default ProjectForm

const Frame = styled.div`
  position: relative;
  background: var(--white);
  width: 100%;
  z-index: 1000;
  padding: 3.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 5px solid var(--secondary); */

  @media (min-width: 662px) {
    width: 80%;
    max-width: 800px;
    padding: 3.5rem 5rem;
  }
`

const Header = styled.div`
  text-align: center;
  padding: 1rem;
  & ${H1} {
    text-align: center;
    font-size: large;
    margin-bottom: 0.25rem;
  }

  & ${P} {
    font-size: smaller;
  }

  @media (min-width: 400px) {
    & ${H1} {
      font-size: x-large;
    }
  }

  @media (min-width: 662px) {
    & ${H1} {
      font-size: xx-large;
    }

    & ${P} {
      font-size: initial;
    }
  }
`
