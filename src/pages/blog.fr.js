import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import BlogList from "../components/blogList"

const Blog = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Blog de Jean-Christophe Séguin Cabana (aka Jeececab), développeur Front-end basé à Montréal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Blog - Jeececab - Développeur Front-end de Montréal</title>
        <link rel="canonical" href="https://www.jeececab.com/fr/blog" />
        <link
          rel="alternate"
          href="https://www.jeececab.com/blog"
          hreflang="en"
        />
        <html lang="fr" />
      </Helmet>
      <Layout lang="fr" location="blog">
        <h1 className={loaded ? "displayed" : ""}>Lire des choses</h1>
        <BlogList lang="fr" />
      </Layout>
    </>
  )
}

export default Blog
