import React from "react"
import Layout from "../components/layout"
import "../styles/index.scss"

const Homepage = () => {
  return (
    <Layout>
      <div className="hero">
        <h1>Jeececab</h1>

        <div className="hero__subtitles">
          <h2>Short for Jean-Christophe Séguin Cabana</h2>
          <h2>Front-end developer from Montreal</h2>
        </div>

        <div className="hero__bio">
          <p>
            Hey there. I'm glad you stopped by. I started coding more seriously
            in late 2017, in the goal of becoming a front-end dev by 2019.
            Thanks to a great company, I was able to jump from CX to ITs in
            November 2018. They tried me part-time for 2 months and then hired
            me full-time. I'm still working there and it's amazing. Moral of the
            story: worship Cthulhu.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
