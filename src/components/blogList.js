import React, { useState, useEffect } from "react"
import styles from "./blogList.module.scss"

const BlogList = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <h2 className={`${styles.subtitle} ${loaded ? "displayed" : ""}`}>
        {lang === "fr" ? "Bientôt..." : "Coming soon..."}
      </h2>
    </>
  )
}

export default BlogList
