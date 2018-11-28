import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import ContactForm from '../components/contactForm'
import { Spring } from 'react-spring'

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  form {
    grid-row: 2;
  }
  @media (min-width: 600px) {
    grid-template-columns: 3fr 2fr;
  }
`

export default function about({ data }) {
  return (
    <Layout>
      <Spring from={{ position: 'relative', left: -800 }} to={{ left: 0 }}>
        {props => (
          <ContactWrapper style={props}>
            <div className="contact-message">
              <h1 className="contact-message__title">Contact Me</h1>
              <p className="contact-message__text">
                If you're in need of web development, web design or branding
                services, send me an email. I'm sure we can come up with a plan
                that's just right for you.
              </p>
            </div>
            <ContactForm />
          </ContactWrapper>
        )}
      </Spring>
    </Layout>
  )
}