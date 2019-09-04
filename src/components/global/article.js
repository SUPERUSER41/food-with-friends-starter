import React from "react"
import styled from "styled-components"
import { setColor, setFontFamily } from "../../styles"

const Article = ({ className, children }) => {
  return <article className={className}>{children}</article>
}

export default styled(Article)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${setColor.accentColor};
  padding: 2rem;

  h3 {
    text-align: center;
    text-transform: uppercase;
    color: ${setColor.accentColor};
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  a {
    color: ${setColor.accentColor};
    text-decoration: none;
    ${setFontFamily.main} font-size: 1rem;
  }

  > p {
    margin: 0 auto;
    display: inline-block;
    text-align: left;
    margin: 1rem 0;
    ${setFontFamily.main} font-size: 1rem;
  }
`
