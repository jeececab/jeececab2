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
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Skills of Jean-Christophe Séguin Cabana (aka Jeececab), front-end developer based in Montreal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Skills - Jeececab - Front-end developer from Montreal</title>
        <link rel="canonical" href="https://www.jeececab.com/skills" />
        <link
          rel="alternate"
          href="https://www.jeececab.com/fr/skills"
          hreflang="fr"
        />
        <html lang="en" />
      </Helmet>
      <Layout lang="en" location="skills">
        <h1 className={loaded ? "displayed" : ""}>Skills</h1>
        <Skillset lang="en" />
      </Layout>
    </>
  )
}

export default Skills
