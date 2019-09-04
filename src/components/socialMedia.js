import React from "react"
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io"
import styled from "styled-components"
import { setColor } from "../styles"

const Section = styled.section`
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  li {
    padding: 0.5rem;
    position: relative;
    list-style-type: none;
  }
  a {
    font-size: 160%;
    text-decoration: none;
    color: ${setColor.accentColor};

    :hover,
    :active {
      color: ${setColor.mainGrey};
    }
  }
`

const SocialMedia = () => {
  return (
    <Section>
      <h2>Follow Us</h2>
      <ul>
        <li>
          <a href="https://www.instagram.com/">
            <IoLogoInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <IoLogoTwitter />
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default SocialMedia
