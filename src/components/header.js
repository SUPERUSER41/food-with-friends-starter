import React from "react"
import styled from "styled-components"
import { RowMenu } from "../components/menu"
import Logo from "../components/global/logo"
import { MenuItems } from "../seedData"
import { setColor, setFontFamily, setFontSize } from "../styles"
import { SloganWords } from "../seedData"
import MobileMenu from "../components/mobileMenu"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${setColor.accentColor};
  padding: 1rem 0;
`
const P = styled.p`
  ${setFontFamily.main};
  ${setFontSize.larger};
  color: ${setColor.mainBlack};
  font-weight: normal;
  width: 250px;
  text-align: center;
`

const header = () => {
  return (
    <>
      <GlobalStyle />
      <MobileMenu right MenuItems={MenuItems} />
      <Header>
        <Logo />
        <P> {SloganWords}</P>
      </Header>
      <RowMenu MenuItems={MenuItems} center />
    </>
  )
}

export default header
