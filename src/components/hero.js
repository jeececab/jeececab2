import React, { useState, useEffect } from "react"
import styles from "./hero.module.scss"

const Hero = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <div className={styles.hero}>
      <h1 className={`${styles.hero__title} ${loaded ? "displayed" : ""}`}>
        Jeececab
      </h1>

      <div className={styles.hero__subtitles}>
        <h2 className={`${styles.hero__subtitle} ${loaded ? "displayed" : ""}`}>
          {lang === "fr"
            ? "Alias de Jean-Christophe Séguin Cabana"
            : "Short for Jean-Christophe Séguin Cabana"}
        </h2>
        <h2 className={`${styles.hero__subtitle} ${loaded ? "displayed" : ""}`}>
          {lang === "fr"
            ? "Développeur front-end de Montréal"
            : "Front-end developer from Montreal"}
        </h2>
      </div>

      <div className={`${styles.hero__bio} ${loaded ? "displayed" : ""}`}>
        <p>
          {lang === "fr"
            ? "Salut. Content de vous voir par ici. J'ai commencé à coder plus sérieusement vers la fin de 2017, avec l'intention de devenir développeur dans l'année suivante. Grâce à une super compagnie, j'ai pu sauter du département CX à l'équipe TI en Novembre 2018. Après m'avoir essayé à temps partiel pendant deux mois, ils m'ont embauché à temps plein. J'y travaille toujours et c'est génial. Morale de l'histoire: vénérez Chtulhu."
            : "Hey there. I'm glad you stopped by. I started coding more seriously in late 2017, in the goal of becoming a front-end developer during the following year. Thanks to a great company, I was able to jump from CX to ITs in November 2018. They tried me part-time for 2 months and then hired me full-time. I'm still working there and it's amazing. Moral of the story: worship Cthulhu."}
        </p>
      </div>
    </div>
  )
}

export default Hero
