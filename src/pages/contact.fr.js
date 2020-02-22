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
        <meta
          name="description"
          content="Contacter Jean-Christophe Séguin Cabana (aka Jeececab), développeur Front-end basé à Montréal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>
          Me contacter - Jeececab - Développeur Front-end de Montréal
        </title>
        <link rel="canonical" href="https://www.jeececab.com/fr/contact" />
        <link
          rel="alternate"
          href="https://www.jeececab.com/contact"
          hreflang="en"
        />
        <html lang="fr" />
      </Helmet>
      <Layout lang="fr" location="contact">
        <h1 className={loaded ? "displayed" : ""}>Me contacter</h1>
        <ContactInfo lang="fr" />
      </Layout>
    </>
  )
}

export default Contact
