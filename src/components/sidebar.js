import React from "react"
import Bio from "./bio"
import NewsletterSignup from "./newsletterSignup"
import RecentEvents from "./recentEvents"
import Instagram from "./instagram"
import SocialMedia from "./socialMedia"
import { themeAside } from "../styles"
import { ThemeProvider } from "styled-components"
import Aside from "../components/global/aside"

const Sidebar = ({ className, children }) => {
  return (
    <Aside>
      <Bio />
      <NewsletterSignup />
      <RecentEvents />
      <ThemeProvider theme={themeAside}>
        <Instagram />
      </ThemeProvider>
      <SocialMedia />
    </Aside>
  )
}

export default Sidebar
