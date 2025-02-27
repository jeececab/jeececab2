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
          content="Site Web personnel de Jean-Christophe Séguin Cabana (aka Jeececab), développeur front-end basé à Montréal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Jeececab - Développeur Front-end de Montréal</title>
        <link rel="canonical" href="https://www.jeececab.com/fr" />
        <link rel="alternate" href="https://www.jeececab.com" hreflang="en" />
        <html lang="fr" />
      </Helmet>
      <Layout lang="fr" location="">
        <Hero lang="fr" />
      </Layout>
    </>
  )
}

export default Homepage
