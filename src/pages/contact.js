import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import ContactInfo from "../components/contactInfo"

const Contact = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="en" location="contact">
      <h1 className={loaded ? "displayed" : ""}>Contact</h1>
      <ContactInfo lang="en" />
    </Layout>
  )
}

export default Contact
