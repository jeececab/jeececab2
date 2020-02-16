import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import styles from "./layout.module.scss"

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <div
        className={`${styles.container} ${
          location && location === "index" ? styles.container_hp : ""
        }`}
      >
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
