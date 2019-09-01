import React from "react"
import Bio from "./bio"
import NewsletterSignup from "./newsletterSignup"
import RecentEvents from "./recentEvents"

const aside = () => {
  return (
    <div>
      <Bio />
      <NewsletterSignup />
      <RecentEvents />
    </div>
  )
}

export default aside
