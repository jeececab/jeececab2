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
          content="Blog of Jean-Christophe Séguin Cabana (aka Jeececab), front-end developer based in Montreal. Javascript, HTML, CSS, React, VueJs, NodeJs, MongoDB."
        />
        <title>Blog - Jeececab - Front-end developer from Montreal</title>
        <link rel="canonical" href="https://www.jeececab.com/blog" />
        <link
          rel="alternate"
          href="https://www.jeececab.com/fr/blog"
          hreflang="fr"
        />
        <html lang="en" />
      </Helmet>
      <Layout lang="en" location="blog">
        <h1 className={loaded ? "displayed" : ""}>Read stuff</h1>
        <BlogList lang="en" />
      </Layout>
    </>
  )
}

export default Blog
