import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import BlogList from "../components/blogList"

const Blog = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="fr" location="blog">
      <h1 className={loaded ? "displayed" : ""}>Lire des choses</h1>
      <BlogList lang="fr" />
    </Layout>
  )
}

export default Blog
