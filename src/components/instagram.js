import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import useInstagram from "../hooks/use-instragram"
import { setColor, setFontFamily } from "../styles"

const PhotosDiv = styled.div`
  border-top: 1px solid ${setColor.accentColor};
  border-bottom: 1px solid ${setColor.accentColor};
  border-left: ${props => props.theme.borderLeft};
  border-right: ${props => props.theme.borderRight};
  padding: ${props => props.theme.padding};
`

const PhotosFlex = styled.div`
  display: ${props => props.theme.display};
  flex-flow: row nowrap;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.gridGap};
  grid-row-gap: 10px;
`

const H2 = styled.h2`
  display: ${props => props.theme.displayH2};
  font-size: 1.5rem;
  ${setFontFamily.serif};
  font-weight: bold;
  text-align: center;
  margin-top: 0;
  padding: 0;
`

const PhotoLink = styled.a`
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
    <PhotosDiv>
      <H2>Instagram</H2>
      <PhotosFlex>
        {instaPhotos.map(photo => (
          <PhotoLink href={`https://instagram.com/p/${photo.id}/`}>
            <Image key={photo.id} fluid={photo.fluid} alt={photo.caption} />
          </PhotoLink>
        ))}
      </PhotosFlex>
    </PhotosDiv>
  )
}

export default Instagram
