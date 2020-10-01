import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Section from "../Section"
import Title from "../Title"
import { H4 } from "../Typography"
import Container from "../Container"

const OurProcessSection = ({ section, className }) => {
  return (
    <Section className={className}>
      <Container size="sm">
        <Title style={{ textAlign: "center" }}>{section.sectionTitle}</Title>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <MDXRenderer>{section.sectionText.childMdx.body}</MDXRenderer>
        </div>

        <hr style={{ width: "60%", margin: "4rem auto" }} />
        {section.contentReferences.map(step => {
          return (
            <ProcessWrapper key={step.id}>
              <img
                alt=""
                src={step.illustration.file.url}
                key={step.illustration.file.url}
              />
              <div>
                <H4>
                  Step {step.step}: {step.title}
                </H4>
                <MDXRenderer>{step.description.childMdx.body}</MDXRenderer>
              </div>
            </ProcessWrapper>
          )
        })}
      </Container>
    </Section>
  )
}

export default styled(OurProcessSection)`
  flex-direction: column;
`

const ProcessWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  & img {
    width: 30%;
    margin-right: 2rem;
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    div {
      text-align: right;
    }

    img {
      margin-right: 0;
      margin-left: 2rem;
    }
  }
`
