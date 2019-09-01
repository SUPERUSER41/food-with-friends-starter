import React from "react"
import styled from "styled-components"
import Aside from "../components/aside"

const Main = styled.main`
  display: grid;
  width: 100vw;

  @media (min-width: 736px) {
    margin: 2rem auto 4rem;
    width: 90vw;
    max-width: 1425px;
    grid-template-columns: 3fr 2fr;
    grid-gap: 10px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Main id="page-wrap">
        {children}

        <Aside />
      </Main>
      <footer></footer>
    </>
  )
}

export default Layout
