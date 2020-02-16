import React, { useState, useEffect } from "react"
import styles from "./hero.module.scss"

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <div className={styles.hero}>
      <h1 className={`${styles.hero__title} ${loaded ? styles.displayed : ""}`}>
        Jeececab
      </h1>

      <div
        className={`${styles.hero__subtitles} ${
          loaded ? styles.displayed : ""
        }`}
      >
        <h2 className={styles.hero__subtitle}>
          Short for Jean-Christophe Séguin Cabana
        </h2>
        <h2 className={styles.hero__subtitle}>
          Front-end developer from Montreal
        </h2>
      </div>

      <div className={`${styles.hero__bio} ${loaded ? styles.displayed : ""}`}>
        <p>
          Hey there. I'm glad you stopped by. I started coding more seriously in
          late 2017, in the goal of becoming a front-end dev by 2019. Thanks to
          a great company, I was able to jump from CX to ITs in November 2018.
          They tried me part-time for 2 months and then hired me full-time. I'm
          still working there and it's amazing. Moral of the story: worship
          Cthulhu.
        </p>
      </div>
    </div>
  )
}

export default Hero
