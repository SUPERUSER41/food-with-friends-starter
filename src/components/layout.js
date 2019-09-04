import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import Sidebar from "../components/sidebar"
import Instagram from "../components/instagram"
import Header from "./header"
import Footer from "./footer"
import { theme } from "../styles"

const Main = styled.main`
  display: grid;
  width: 100vw;
  padding: 1rem 2rem;

  @media (min-width: 736px) {
    margin: 2rem auto 4rem;
    width: 90vw;
    max-width: 1425px;
    grid-template-columns: 3fr 2fr;
    grid-gap: 10px;
  }
`

const Layout = ({ children, topComponent }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Food with Friends | Home Page</title>
        <meta
          name="description"
          content="There is more to Life than Hustle & Grind. It is about spending time with those you care about, eating good food, drinking great drinks and simply enjoying life."
        />
      </Helmet>
      <Header />
      {topComponent && topComponent()}
      <Main id="page-wrap">
        {children}

        <Sidebar />
      </Main>
      <ThemeProvider theme={theme}>
        <Instagram />
      </ThemeProvider>
      <Footer />
    </>
  )
}

export default Layout
