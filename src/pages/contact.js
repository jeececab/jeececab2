import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import ContactInfo from "../components/contactInfo"

const Contact = () => {
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
          content="Contact Jean-Christophe Séguin Cabana (aka Jeececab), front-end developer based in Montreal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Contact - Jeececab - Front-end developer from Montreal</title>
        <link rel="canonical" href="https://www.jeececab.com/contact" />
        <link
          rel="alternate"
          href="https://www.jeececab.com/fr/contact"
          hreflang="fr"
        />
        <html lang="en" />
      </Helmet>
      <Layout lang="en" location="contact">
        <h1 className={loaded ? "displayed" : ""}>Contact</h1>
        <ContactInfo lang="en" />
      </Layout>
    </>
  )
}

export default Contact
