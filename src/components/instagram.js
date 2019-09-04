import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import useInstagram from "../hooks/use-instragram"

const Div = styled.div`
  display: ${props => props.theme.display};
  flex-flow: row nowrap;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.gridGap};
  grid-row-gap: 10px;
`
const H2 = styled.h2`
  display: ${props => props.theme.displayH2};
`

const A = styled.a`
  width: ${props => props.theme.width};
  transition: ${props => props.theme.width};

  :focus,
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
    z-index: 0;
  }
`

const Instagram = () => {
  const instaPhotos = useInstagram()

  return (
    <section>
      <H2>Instagram</H2>
      <Div>
        {instaPhotos.map(photo => (
          <A href={`https://instagram.com/p/${photo.id}/`}>
            <Image key={photo.id} fluid={photo.fluid} alt={photo.caption} />
          </A>
        ))}
      </Div>
    </section>
  )
}

export default Instagram
