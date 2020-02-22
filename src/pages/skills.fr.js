import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Skillset from "../components/skillset"

const Skills = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Habiletés de Jean-Christophe Séguin Cabana (alias Jeececab), développeur Front-end basé à Montréal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Habiletés - Jeececab - Développeur Front-end de Montréal</title>
        <link rel="canonical" href="https://www.jeececab.com/fr/skills" />
        <link
          rel="alternate"
          href="https://www.jeececab.com/skills"
          hreflang="en"
        />
        <html lang="fr" />
      </Helmet>
      <Layout lang="fr" location="skills">
        <h1 className={loaded ? "displayed" : ""}>Habiletés</h1>
        <Skillset lang="fr" />
      </Layout>
    </>
  )
}

export default Skills
