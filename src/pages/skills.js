import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Skillset from "../components/skillset"

const Skills = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="en" location="skills">
      <h1 className={loaded ? "displayed" : ""}>Skills</h1>
      <Skillset lang="en" />
    </Layout>
  )
}

export default Skills
