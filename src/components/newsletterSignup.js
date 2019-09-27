import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { setColor } from "../styles"
import { newsletterData } from "../seedData"
import Button from "../components/global/button"
import Input from "../components/global/input"
import styled from "styled-components"

const Section = styled.section`
  background-color: ${setColor.mainBlack};

  color: ${setColor.offWhite};

  span {
    color: ${setColor.accentColor};
  }
  p {
    margin: 0;
    text-align: center;
  }
  label {
    padding-bottom: 0.25rem;
    display: block;
  }

  h2 {
    color: ${setColor.accentColor};
  }
`

// https://github.com/benjaminhoffman/gatsby-plugin-mailchimp/blob/master/examples/gatsby-v2/src/pages/index.js

export default class MailChimpComponent extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <>
        <Section class="form-section">
          <h2 class="form-h3">{newsletterData.headline}</h2>
          <p class="form-p">{newsletterData.tagline}</p>
          <div>
            <form class="form-form" onSubmit={this._handleSubmit}>
              <label class="form-label" for="email">
                <span>*</span>Email
              </label>
              <Input
                type="email"
                onChange={this._handleChange}
                placeholder="Your Email Address"
                name="email"
                id="email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                required
              />
              <Button type="submit">{newsletterData.buttonText}</Button>
              <p class="form-p">
                <small>
                  <span>*</span>
                  {newsletterData.privacyText}
                </small>
              </p>
            </form>
          </div>
        </Section>
      </>
    )
  }
}
