import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

const Contact = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="fr" location="contact">
      <h1 className={loaded ? "displayed" : ""}>Me contacter</h1>
    </Layout>
  )
}

export default Contact
