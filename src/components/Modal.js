import React, { useState, useContext } from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"

import { P, H1 } from "./Typography"
import ProgressBar from "./FormComponents/ProgressBar"
import FormContainer from "./FormComponents/FormContainer"
import { CloseButton, PrevButton } from "./FormComponents/Buttons"
import { Formik, Form } from "formik"
import { ModalContext } from "../context/ModalContext"
// import { useLockBodyScroll } from "../utils/hooks"
import { useSpring, animated } from "react-spring"

import getFieldsArray from "./FormComponents/getFieldsArray"

const isValidEmail = value =>
  !value
    ? true
    : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        value
      )
    ? true
    : false
const isValidValue = value => (!value ? true : false)

const Modal = props => {
  const [question, setQuestion] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [accepted, setAccepted] = useState(false)

  var fieldsArray = []

  const [modalOpen, setModalOpen] = useContext(ModalContext)

  const showModal = useSpring({
    to: async next => {
      await next(modalOpen ? { display: "flex" } : { opacity: 0 })
      await next(modalOpen ? { opacity: 1 } : { display: "none" })
    },
    from: { display: "none", opacity: 0 },
  })

  const { className } = props
  return (
    <animated.div className={className} style={showModal}>
      <Overlay onClick={() => setModalOpen(false)} />
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
        <CloseButton onClick={() => setModalOpen(false)} />
        <PrevButton onClick={() => setQuestion(question - 1)} />
      </Frame>
    </animated.div>
  )
}

Modal.propTypes = {}

export default styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 750;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`

const Frame = styled.div`
  position: relative;
  background: var(--white);
  width: 600px;
  z-index: 1000;
  padding: 3.5rem 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 662px) {
    padding: 3.5rem 5rem;
  }
`

const Header = styled.div`
  text-align: center;
  & ${H1} {
    text-align: center;
    font-size: x-large;
    margin-bottom: 0.25rem;
  }

  & ${P} {
    font-size: small;
  }

  @media (min-width: 662px) {
    font-size: xx-large;
  }
`
