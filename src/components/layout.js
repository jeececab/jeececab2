import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import styles from "./layout.module.scss"

const Layout = ({ children, location, lang }) => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "bground-img.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header lang={lang} location={location} />
      <Img
        fluid={data.image.childImageSharp.fluid}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1
        }}
      />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
        <Footer lang={lang} />
      </div>
    </>
  )
}

export default Layout
