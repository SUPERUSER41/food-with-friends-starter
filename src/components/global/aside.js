import React from "react"
import styled from "styled-components"
import { setColor, setFontFamily } from "../../styles"

const Aside = ({ className, children }) => {
  return <aside className={className}>{children}</aside>
}

export default styled(Aside)`
  max-width: 350px;

  section {
    padding: 1rem;
    margin-top: 2rem;
    border-top: 1px solid ${setColor.accentColor};
    border-bottom: 1px solid ${setColor.accentColor};
    border-left: 1px solid ${setColor.accentColor};
    border-right: 1px solid ${setColor.accentColor};
    ${setFontFamily.main}
  }

  section:first-child {
    margin-top: 0;
  }

  h2 {
    text-align: center;
    ${setFontFamily.serif}
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1rem;
  }
`
