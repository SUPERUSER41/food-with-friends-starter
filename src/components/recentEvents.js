import React from "react"
import { setColor, setFontFamily } from "../styles"
import styled from "styled-components"
import { events } from "../seedData"
import { Link } from "gatsby"

const Section = styled.section`
  a {
    color: ${setColor.accentColor};
    text-decoration: none;
    ${setFontFamily.main};
  }
  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 0.25rem;
  }
`

const RecentEvents = () => {
  return (
    <Section>
      <h2>Recent Events</h2>
      <ul>
        {events.slice(0, 5).map(event => (
          <li key={event.id}>
            <Link to={event.slug}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default RecentEvents
