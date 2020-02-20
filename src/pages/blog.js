import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import BlogList from "../components/blogList"

const Blog = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout lang="en" location="blog">
      <h1 className={loaded ? "displayed" : ""}>Read stuff</h1>
      <BlogList lang="en" />
    </Layout>
  )
}

export default Blog
