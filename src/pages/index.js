import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Hero from "../components/hero"
import "../styles/index.scss"

const Homepage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Personal website of Jean-Christophe Séguin Cabana (aka Jeececab), front-end developer based in Montreal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Jeececab - Front-end developer from Montreal</title>
        <link rel="canonical" href="https://www.jeececab.com" />
        <link rel="alternate" href="https://www.jeececab.com/fr" hreflang="fr" />
        <html lang="en" />
      </Helmet>
      <Layout lang="en" location="">
        <Hero lang="en" />
      </Layout>
    </>
  )
}

export default Homepage
