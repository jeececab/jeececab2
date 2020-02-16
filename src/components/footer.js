import React, { useState, useEffect } from "react"
import styles from "./footer.module.scss"
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <footer className={`${styles.footer} ${loaded ? styles.displayed : ""}`}>
      <div className={styles.icons}>
        <a
          href="https://github.com/jeececab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/jcsegcab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/jeececab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <p className={styles.p}>Created by Jeececab, © 2020</p>
    </footer>
  )
}

export default Footer
