import React from "react"
import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"
import Title from "../components/global/title"
import { get, orderBy } from "lodash"
import Article from "../components/global/article"
import * as seed from "../seedData"

import useImages from "../hooks/useImages"
import Card from "../components/card"

const IndexPage = () => {
  const images = useImages()
  const orderedEvents = orderBy(
    seed.events,
    data => {
      const date = new Date(
        get(data, ["information", "dinnerDate"])
      ).toISOString()

      return date
    },
    ["desc"]
  )
  const getDiffDays = event => {
    const currentDate = new Date()
    const eventDate = new Date(get(event, ["information", "dinnerDate"]))
    const diffTime = eventDate.getTime() - currentDate.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
  }
  const nextEventDate = orderBy(
    orderedEvents,
    event => {
      return getDiffDays(event)
    },
    "asc"
  ).filter(event => {
    return getDiffDays(event) > 0
  })[0]

  return (
    <Layout topComponent={ImageSlider}>
      <div>
        <Title center title="Food with Friends" />
        <Article>
          <Card
            {...nextEventDate}
            image={images[nextEventDate.image.replace(".jpg", "")].fluid}
            isMainEvent
          />

          {orderedEvents.map((event, index) => {
            return (
              <Card
                {...event}
                key={event.id}
                image={images[event.image.replace(".jpg", "")].fluid}
              />
            )
          })}
        </Article>
      </div>
    </Layout>
  )
}

export default IndexPage
