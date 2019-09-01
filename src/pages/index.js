import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

const Home = () => {
  return (
    <div id="outer-container" outerContainerId={"outer-container"}>
      <Header />
      <ImageSlider />
      <Layout>
        <p>Home Page</p>
      </Layout>
    </div>
  )
}

export default Home
