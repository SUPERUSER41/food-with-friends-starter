import styled from "styled-components"
import { setColor, setFontFamily } from "../../styles"

const Input = styled.input`
  display: block;
  width: 100%;
  border: 3px solid transparent;
  ::placeholder {
    color: ${setColor.mainGrey};
    font-size: 0.8rem;
    text-align: center;
  }
  &:focus {
    outline: 3px solid ${setColor.mainGrey};
    border-color: transparent;
  }
  ${setFontFamily.main};
  padding: 0.3rem 1%;
  margin: 0.5rem auto;
`

export default Input
