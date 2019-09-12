import React from "react"
import { Formik, Form } from "formik"

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

const ProjectForm = ({ fields, question, setQuestion }) => {
  return (
    <div style={{ marginBottom: ".75rem" }}>
      <Formik
        isInitialValid={false}
        initialValues={{ type: "", name: "", email: "", phone: "" }}
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
          const fieldsArray = getFieldsArray(
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
  )
}

export default ProjectForm
