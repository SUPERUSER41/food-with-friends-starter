import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { bioData } from "../seedData"
import { graphql, useStaticQuery } from "gatsby"

const Section = styled.section`
  small {
    text-align: center;
    display: block;
    padding: 0.25rem;
  }
`

const Bio = ({ className, small }) => {
  const data = useStaticQuery(query)

  return (
    <Section>
      <h2>{bioData.headline}</h2>
      <Img className={className} fluid={data.logo.childImageSharp.fluid} />
      <small>{bioData.author}</small>
      <p>{bioData.content}</p>
    </Section>
  )
}

const query = graphql`
  query bioImage {
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
