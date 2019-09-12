import React from "react"
import Label from "./Label"
import CustomInput from "./CustomInput"

import { Field, ErrorMessage } from "formik"

const FieldGroup = ({ question }) => {
  return (
    <>
      <Label for={question.name}>{question.label}</Label>
      <Field
        type={question.type}
        name={question.name}
        id={question.name}
        component={CustomInput}
      ></Field>
      <ErrorMessage name={question.name} component={question.component} />
    </>
  )
}

export default FieldGroup
