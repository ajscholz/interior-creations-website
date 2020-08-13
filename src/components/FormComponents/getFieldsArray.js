import React from "react"

import { Field } from "formik"

import CustomInput from "./CustomInput"
import CustomSelect from "./CustomSelect"
import InputWithNextButton from "./InputWithNextButton"
import InlineButton from "./InlineButton"
import Label from "./Label"

export default (props, question, setQuestion, isValidEmail, isValidValue) => [
  <>
    <Label>What is your name?</Label>
    <InputWithNextButton>
      <Field name="name" component={CustomInput} validate={isValidValue} />
      <InlineButton
        solid
        disabled={!props.isValid}
        type="button"
        onClick={e => {
          e.preventDefault()
          setQuestion(question + 1)
        }}
      >
        Next
      </InlineButton>
    </InputWithNextButton>
  </>,
  <>
    <Label>What kind of project are you interested in?</Label>
    <InputWithNextButton>
      <Field
        name="type"
        component={CustomSelect}
        validate={isValidValue}
        // defaultValue="Please select one"
      >
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
        <option value="mudroom">Mudroom</option>
        <option value="home office">Home Office</option>
        <option value="refacing">Refacing</option>
        <option value="multiple">Multiple</option>
      </Field>
      <InlineButton
        solid
        disabled={!props.isValid}
        type="button"
        onClick={e => {
          e.preventDefault()
          setQuestion(question + 1)
        }}
      >
        Next
      </InlineButton>
    </InputWithNextButton>
  </>,

  <>
    <Label>What is your email?</Label>
    <InputWithNextButton>
      <Field name="email" component={CustomInput} validate={isValidEmail} />
      <InlineButton
        solid
        disabled={!props.isValid}
        type="button"
        onClick={e => {
          e.preventDefault()
          setQuestion(question + 1)
        }}
      >
        Next
      </InlineButton>
    </InputWithNextButton>
  </>,
  <>
    <Label>What is your phone number?</Label>
    <InputWithNextButton>
      <Field
        name="phone"
        component={CustomInput}
        type="phone"
        validate={isValidValue}
      />
      <InlineButton
        solid
        disabled={!props.isValid}
        type="submit"
        onClick={e => {
          e.preventDefault()
          setQuestion(question + 1)
          props.submitForm()
        }}
      >
        Submit
      </InlineButton>
    </InputWithNextButton>
  </>,
]
