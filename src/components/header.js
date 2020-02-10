import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  const [displayMenu, toggleDisplayMenu] = useState(false)

  return (
    <>
      <div
        onClick={() => toggleDisplayMenu(!displayMenu)}
        className={`${styles.hamburger} ${displayMenu ? styles.displayed : ""}`}
        role="menu"
        tabIndex={0}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`${styles.nav} ${displayMenu ? styles.displayed : ""}`}>
        <ul>
          <li>
            <Link to="/" activeClassName={styles.active}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" activeClassName={styles.active}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName={styles.active}>
              Read stuff
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={styles.active}>
              Contact me
            </Link>
          </li>
          <li>
            <Link to="/lang">
              Switch FR
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
