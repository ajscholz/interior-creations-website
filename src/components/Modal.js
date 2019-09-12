import React, { useState } from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"

import { P, H1 } from "./Typography"
import ProjectForm from "./FormComponents/ProjectForm"
import ProgressBar from "./FormComponents/ProgressBar"
import FormContainer from "./FormComponents/FormContainer"
import { CloseButton, PrevButton } from "./FormComponents/Buttons"
import { Formik, Form } from "formik"

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

  var fieldsArray = []

  const { className, setModalOpen } = props
  return (
    <div className={className}>
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
              initialValues={{ type: null, name: "", email: "", phone: "" }}
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
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
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
                return <Form>{fieldsArray[question]}</Form>
              }}
            </Formik>
          </div>

          <ProgressBar length={4} current={question} />
        </FormContainer>
        <CloseButton onClick={() => setModalOpen(false)} />
        <PrevButton onClick={() => setQuestion(question - 1)} />
      </Frame>
    </div>
  )
}

Modal.propTypes = {}

export default styled(Modal)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  padding: 3.5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  text-align: center;
  & ${H1} {
    text-align: center;
    font-size: xx-large;
    margin-bottom: 0.25rem;
  }

  & ${P} {
    font-size: small;
  }
`
