import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import ContactInfo from "../components/contactInfo"

const Contact = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="fr" location="contact">
      <h1 className={loaded ? "displayed" : ""}>Me contacter</h1>
      <ContactInfo lang="fr" />
    </Layout>
  )
}

export default Contact
