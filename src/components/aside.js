import React from "react"
import Bio from "./bio"
import NewsletterSignup from "./newsletterSignup"
import RecentEvents from "./recentEvents"
import Instagram from "./instagram"
import styled from "styled-components"
import { themeAside } from "../styles"
import { ThemeProvider } from "styled-components"

const Aside = styled.aside`
  max-width: 350px;
`

const aside = () => {
  return (
    <Aside>
      <Bio />
      <NewsletterSignup />
      <RecentEvents />
      <ThemeProvider theme={themeAside}>
        <Instagram />
      </ThemeProvider>
    </Aside>
  )
}

export default aside
