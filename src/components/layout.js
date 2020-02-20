import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import styles from "./layout.module.scss"

const Layout = ({ children, location, lang }) => {
  return (
    <>
      <Header lang={lang} location={location} />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
        <Footer lang={lang} />
      </div>
    </>
  )
}

export default Layout
