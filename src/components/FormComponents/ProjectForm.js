import React, { useState, useContext } from "react"
import styled from "styled-components"
import ProgressBar from "./ProgressBar"
import FormContainer from "./FormContainer"
import { CloseButton, PrevButton } from "./Buttons"
import { Formik, Form } from "formik"

import { P, H1 } from "../Typography"

import getFieldsArray from "./getFieldsArray"

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
  const [submitted, setSubmitted] = useState(false)
  const [accepted, setAccepted] = useState(false)

  var fieldsArray = []

  return (
    <Frame>
      <Header>
        <H1>Bring Your Dream To Life</H1>
        <P>Complete these few simple questions and we'll get in touch</P>
      </Header>
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
              type: "Mudroom",
              name: "Andrew",
              email: "andrew@citynorth.church",
              phone: "614-560-1176",
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
                const response = await fetch("/.netlify/functions/contactUs", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ...values,
                    // siteEmail: siteEmail,
                  }),
                })
                const data = await response.json()

                if (response.ok) {
                  setAccepted(true)
                } else {
                  setAccepted(false)

                  throw data.msg
                }
              } catch (err) {
                setQuestion(question - 1)
                console.log(err)
              }
              setSubmitted(true)
              setTimeout(() => {
                if (accepted) resetForm()
                setSubmitting(false)
              }, 2000)
              setTimeout(() => {
                setSubmitted(false)
              }, 5000)
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
                  {props.isSubmitting ? (
                    <div>submitting</div>
                  ) : (
                    <Form>{fieldsArray[question]}</Form>
                  )}
                </>
              )
            }}
          </Formik>
        </div>

        <ProgressBar length={4} current={question} />
      </FormContainer>
      <CloseButton onClick={() => handleClose()} />
      {question !== 0 && (
        <PrevButton onClick={() => setQuestion(question - 1)} />
      )}
    </Frame>
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
