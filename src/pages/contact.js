import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

const Contact = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="en" location="contact">
      <h1 className={loaded ? "displayed" : ""}>Contact</h1>
    </Layout>
  )
}

export default Contact
