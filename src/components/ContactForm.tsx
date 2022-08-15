/* eslint-disable react/destructuring-assignment */
import { navigate } from 'gatsby'
import React, { ChangeEvent, FormEvent, HTMLProps } from 'react'
import styled from 'styled-components'
import fetch from 'unfetch'
import { Button } from '../styles'

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0 1em 0;
  outline: none;
  color: #777777;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: border-box;
`
// eslint-disable-next-line react/jsx-props-no-spreading
const Textarea = props => <Input as="textarea" {...props} />

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '', company: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit(e) {
    if (this.state.email === '' || this.state.name === '') {
      /* eslint-disable-next-line no-alert, no-undef */
      alert('Ups, ein zwingendes Feld ist noch nicht ausgefüllt.')
    } else if (this.state['bot-field'] === undefined) {
      const body = encode({
        'form-name': 'contact',
        subject: this.props.subject || 'Kontaktformular botfabrik.ch',
        ...this.state,
      })
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(() => {
          navigate('/formular-gesendet/')
        })
        .catch((error) => {
          /* eslint-disable-next-line no-console */
          console.log('Error', error)
          /* eslint-disable-next-line no-alert, no-undef */
          alert(
            `Leider hat dies nicht funktioniert. Entschuldigen Sie die Umstände. Wenn Sie uns auf info@apptiva.ch ein Email schicken melden wir uns sofort bei Ihnen.`
          )
        })
    }
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, email, message, company } = this.state
    const { buttonText } = this.props
    return (
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <p hidden>
          <label htmlFor="bot-field">
            Nicht ausfüllen:{' '}
            <input type="text" name="bot-field" onChange={this.handleChange} />
          </label>
          <input type="text" name="subject" />
        </p>
        <p>
          <label htmlFor="name">
            Ihr Name (Pflichtfeld){' '}
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Ihre Email-Adresse (Pflichtfeld){' '}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="company">
            Firma{' '}
            <Input
              type="text"
              name="company"
              value={company}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Ihre Nachricht{' '}
            <Textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p css="text-align: right;">
          <Button type="submit">{buttonText || 'Senden'}</Button>
        </p>
      </form>
    )
  }
}

export default ContactForm
