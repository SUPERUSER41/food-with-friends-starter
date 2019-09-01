import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { BioData } from "../seedData"
import { graphql, useStaticQuery } from "gatsby"
import { setColor, setFontFamily } from "../styles"

const BioDiv = styled.section`
  padding: 0 1rem;
  border: solid 1px ${setColor.accentColor};
  ${setFontFamily.main}
  h3 {
    text-align: center;
    ${setFontFamily.serif}
    font-size: 1.5rem;
  }
  small {
    text-align: center;
    display: block;
    padding: 0.25rem;
  }
  margin-bottom: 2rem;
`

const Bio = ({ className, small }) => {
  const data = useStaticQuery(query)

  return (
    <BioDiv>
      <h3>{BioData.headline}</h3>
      <Img className={className} fluid={data.logo.childImageSharp.fluid} />
      <small>{BioData.author}</small>
      <p>{BioData.content}</p>
    </BioDiv>
  )
}

const query = graphql`
  query BioImage {
    logo: file(relativePath: { eq: "bbq-jason.jpg" }) {
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Bio
