import React, { useState } from "react"
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
  const [submitted, setSubmitted] = useState(false)
  const [accepted, setAccepted] = useState(false)

  return (
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
            const response = await fetch("/functions/contactUs", {
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
          const fieldsArray = getFieldsArray(
            props,
            question,
            setQuestion,
            isValidEmail,
            isValidValue
          )

          return (
            <>
              {props.isSubmitting ? (
                "Submitting..."
              ) : (
                <Form>{fieldsArray[question]}</Form>
              )}
              {accepted && "Message accepted"}
            </>
          )
        }}
      </Formik>
    </div>
  )
}

export default ProjectForm
