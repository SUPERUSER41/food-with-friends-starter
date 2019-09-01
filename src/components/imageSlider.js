import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import { Events } from "../seedData"
import { setColor, setFontFamily } from "../styles"
import { graphql, useStaticQuery } from "gatsby"

const SliderWrapper = styled.section`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${setColor.accentColor};
  height: 350px;
`

const OuterImageTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  background-size: cover;
`

const InnerImageTrack = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0.5rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);

  a {
    text-decoration: none;
    ${setFontFamily.main}
  }

  p {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 0.5rem;
    ${setFontFamily.serif}
  }
`

const imageSlider = () => {
  const query = graphql`
    query image {
      image: file(relativePath: { eq: "bbq-chicken.jpg" }) {
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)

  return (
    <SliderWrapper>
      <Slider>
        {Events.slice(0, 3).map((event, index) => (
          <OuterImageTrack
            key={index}
            className="slider-content"
            style={{
              //backgroundImage: `url('${event.slug} + '.jpg')`,
              backgroundImage: `url(${data.image.publicURL})`,
              height: `350px`,
            }}
          >
            <InnerImageTrack>
              <p>{event.importantInformation.dinnerDate}</p>
              <h2>
                <Link
                  style={{ color: `${setColor.mainBlack}` }}
                  to={event.slug}
                >
                  {event.title} &rarr;{" "}
                </Link>
              </h2>
            </InnerImageTrack>
          </OuterImageTrack>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default imageSlider
