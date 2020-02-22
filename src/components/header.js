import React, { useState } from "react"
import Link from "gatsby-link"
import styles from "./header.module.scss"

const Header = ({ lang, location }) => {
  const [displayMenu, toggleDisplayMenu] = useState(false)

  const buildUrl = target => {
    const prefix = lang === "fr" ? "/fr" : ""
    return prefix + "/" + target
  }

  const handleKeyDown = e => {
    e.keyCode === 77 && toggleDisplayMenu(!displayMenu)
  }

  return (
    <header>
      <div
        onClick={() => toggleDisplayMenu(!displayMenu)}
        onKeyDown={handleKeyDown}
        className={`${styles.hamburger} ${displayMenu ? styles.displayed : ""}`}
        role="button"
        aria-label="Open the menu"
        tabIndex={0}
      >
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
      </div>

      <nav className={`${styles.nav} ${displayMenu ? styles.displayed : ""}`}>
        <ul>
          <li>
            <Link to={buildUrl("")} activeClassName={styles.active}>
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
          </li>
          <li>
            <Link to={buildUrl("skills")} activeClassName={styles.active}>
              {lang === "fr" ? "Habiletés" : "Skills"}
            </Link>
          </li>
          <li>
            <Link to={buildUrl("blog")} activeClassName={styles.active}>
              {lang === "fr" ? "Lire de choses" : "Read stuff"}
            </Link>
          </li>
          <li>
            <Link to={buildUrl("contact")} activeClassName={styles.active}>
              {lang === "fr" ? "Me contacter" : "Contact me"}
            </Link>
          </li>
          <li>
            <Link to={`${lang === "fr" ? "/" + location : "/fr/" + location}`}>
              {lang === "fr" ? "English" : "Français"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
