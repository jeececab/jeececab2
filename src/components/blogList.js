import React, { useState, useEffect } from "react"

const BlogList = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <h2 className={loaded ? "displayed" : ""}>
        {lang === "fr" ? "Bientôt..." : "Coming soon..."}
      </h2>
    </>
  )
}

export default BlogList
