import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Skillset from "../components/skillset"

const Skills = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="fr" location="skills">
      <h1 className={loaded ? "displayed" : ""}>Habiletés</h1>
      <Skillset lang="fr" />
    </Layout>
  )
}

export default Skills
