import React, { useState, useEffect } from "react"
import styles from "./footer.module.scss"
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = ({ lang }) => {
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
          <FaGithub aria-hidden="true" />
          <span className="visible-hidden">
            {lang === "fr" ? "Mon" : "My"} Github
          </span>
        </a>
        <a
          href="https://twitter.com/jcsegcab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter aria-hidden="true" />
          <span className="visible-hidden">
            {lang === "fr" ? "" : "My"} Twitter
          </span>
        </a>
        <a
          href="https://www.instagram.com/jeececab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram aria-hidden="true" />
          <span className="visible-hidden">
            {lang === "fr" ? "" : "My"} Instagram
          </span>
        </a>
        <a>
          <FaLinkedin aria-hiden="true" />
          <span className="visible-hidden">
            {lang === "fr" ? "" : "My"} Linked-in
          </span>
        </a>
      </div>
      <p className={styles.p}>
        {lang === "fr" ? "Créé par Jeececab" : "Created by Jeececab"}, © 2020
      </p>
    </footer>
  )
}

export default Footer
