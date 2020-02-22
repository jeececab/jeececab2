import React, { useState, useEffect } from "react"
import styles from "./skillset.module.scss"
import {
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaAws,
  FaSass,
  FaGitAlt,
  FaGoogle,
} from "react-icons/fa"
import { DiMongodb } from "react-icons/di"

const Skillset = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <h2 className={`${styles.subtitle} ${loaded ? "displayed" : ""}`}>
        {lang === "fr"
          ? "Je développe des sites et applications Web à l'aide de frameworks modernes"
          : "I build Web apps and Websites using modern frameworks"}
      </h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        {lang === "fr" ? (
          <p>
            Je considère les bases importantes (
            <span className={styles.bold}>HTML, CSS, Javascript</span>) et je
            code souvent en mode « vanilla », car j'apprécie le challenge de
            trouver une solution du début. Ça m'aide à mieux comprendre les
            librairies, et je dépends moins d'elles. Cela dit, au travail, nous
            utilisons beaucoup <span className={styles.bold}>ReactJS </span>
            pour l'efficacité et également
            <span className={styles.bold}> VueJS</span>. Ce site Web a été fait
            avec<span className={styles.bold}> Gatsby</span>, car j'étais
            curieux d'expérimenter avec. Par ailleurs, j'ai développé une bonne
            expertise en tests automatisés et comment mettre en place un bon
            flow de CI/CD.
          </p>
        ) : (
          <p>
            I think the basics are important (
            <span className={styles.bold}>HTML, CSS, Javascript</span>) and I
            often code in "vanilla" mode, because I enjoy the challenge of
            figuring out solutions from scratch. It helps me better understand
            what librairies do, and I depend less on them. That being said, at
            work, we use <span className={styles.bold}>ReactJS</span> a lot for
            effeciency and also <span className={styles.bold}>VueJS</span>. This
            Website was made using <span className={styles.bold}>Gatsby</span>,
            because I was curious to experiment with it. Otherwise, I developed
            a good expertise in automated testing and how to put a good CI/CD
            flow into place.
          </p>
        )}
        <div className={styles.icons}>
          <FaJs />
          <FaHtml5 />
          <FaCss3 />
          <FaSass />
          <FaReact />
          <FaVuejs />
          <FaGitAlt />
        </div>
      </div>

      <h2 className={`${styles.subtitle} ${loaded ? "displayed" : ""}`}>
        {lang === "fr" ? "La Voie du Fullstack" : "The Way of the Fullstack"}
      </h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        {lang === "fr" ? (
          <p>
            Je sais que c'est une longue route en constante évolution, mais
            devenir Fullstack est un de mes buts personnels. C'est pourquoi que
            dès que j'ai l'opportunité au travail, je tente de me faire assigner
            des tâches qui tombent plus dans l'univers back-end, étant donné que
            je suis de plus en plus comfortable avec la partie front-end. J'ai
            été impliqué dans la mise en place de solutions serverless
            (endpoints
            <span className={styles.bold}> MongoDB</span> Stitch et fonctions
            serverless). J'ai configuré et déployé quelques unes de nos Apps via
            le service
            <span className={styles.bold}> AWS Amplify</span>, incluant un flow
            de déploiement continu complet (avec Cypress pour les tests
            automatisés). J'ai également travaillé avec
            <span className={styles.bold}> Google Firebase </span>comme solution
            de base de données et authentification. Et finalement, j'utilise
            aussi
            <span className={styles.bold}> NodeJS</span> à l'occasion.
          </p>
        ) : (
          <p>
            I know it's a long and constantly evolving road, but becoming a
            fullstack developer is a personal goal of mine. This is why whenever
            I get the chance at work, I try to get assigned to tasks that are
            more in the back-end realm, since I'm getting more and more
            comfortable on the front-end side of things. I was involved on a few
            serverless solutions setup (
            <span className={styles.bold}>MongoDB</span> Stitch endpoints and
            serverless functions). I configured and deployed a few of our app
            via the
            <span className={styles.bold}> AWS Amplify service</span>, including
            the continuous deployment pipeline (with Cypress automated tests). I
            worked with<span className={styles.bold}> Google Firebase </span>to
            set up databases and authentication. Finally, I also occasionally
            use
            <span className={styles.bold}> NodeJS</span>.
          </p>
        )}
        <div className={styles.icons}>
          <FaNodeJs />
          <DiMongodb />
          <FaAws />
          <FaGoogle />
        </div>
      </div>
    </>
  )
}

export default Skillset
