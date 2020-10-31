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
import { SiCircleci, SiGraphql, SiJest, SiPostcss, SiPostgresql, SiSvelte } from "react-icons/si"

const Skillset = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  const text =
    lang === "fr"
      ? {
          the: "Le",
          front: <span className={styles.angl}>front</span>,
          front_par: "Pour ce qui est des librairies/framework, je travaille présentement surtout avec React et occasionnellement avec VueJS. Récemment, j'ai commencé à utiliser Svelte et je pense que ça va devenir mon framework de prédilection pour mes projets personnels. J'ai utilisé jQuery par le passé et fait beaucoup de JavaScript (ES6) «Vanilla». Pour le style, je tend à utiliser SASS/SCSS, mais j'apprécie le pur CSS de plus en plus. J'utilise occasionnellement des librairies/frameworks CSS tels que Bootstrap et Bulma, afin de créer des prototypes ou des applications back-office. Oh, et ce site Web a été conçu avec Gatsby (un peu overkill, mais une belle opportunité de l'essayer).",
          back: <span className={styles.angl}>back</span>,
          back_par: "Je me considère surtout comme développeur JavaScript pour le moment, alors je suis allé avec Node.js, mais j'aimerais vraiment apprendre un autre langage éventuellement, quand j'aurais un bon cas d'utilisation (j'avais commencé à apprendre Golang il y a un petit moment). Mon focus a principalement été sur les solutions serverless, étant donné que c'était requis dans mon emploi actuel, maus également parce que ça semble être en vogue dans le marché. J'ai développé quelques microservices en utilisant principalement AWS et MongoDB Atlas/Realm. Pour mes projets personnels, j'ai expérimenté avec GraphQL, Express, Mongoose, PostgreSQL, Firebase, etc.",
          test: "Tester le tout",
          test_par: "Comment je dors bien la nuit? Grâce aux processus CI/CD et aux tests automatisés bien sûr! Le premier framework que j'avais utilisé était NightwatchJS, qui est construit autour de Selenium. J'avais besoin d'une sollution pour des tests multi-navigateurs effectués sur Browserstack. Maintenant que Cypress supporte plus de navigateurs, c'est le framework que je préfère pour le front-end. Pour le back-end, j'utilise Jest. Mes flows CI/CD sont implémentés avec CircleCI, mais j'ai aussi utilisé les actions Github et j'utilise le flow de déploiement d'Amplify pour certains cas.",
        }
      : {
          the: "The",
          front: "front",
          front_par:
            "As frameworks/libraries go, I currently mostly work with React and occasionally with VueJS. Recently, I started using Svelte and I think it will become my go-to framework for my personal projects. I used jQuery in the past and also did a lot of vanilla JavaScript (ES6). For style, I tend to use SASS/SCSS, but I really enjoy plain CSS more and more. I occasionally use CSS frameworks/libraries like Bootstrap and Bulma, for prototyping or back-office apps. Oh, and this website was built using Gatsby (a bit overkill, but a good opportunity to try it out).",
          back: "back",
          back_par:
            "I consider myself mostly a JavaScript engineer for now, so I went with Node.js, but I really want to get into another language eventually, when I'll have a good use case (I started learning Golang a bit). My focus has been mainly towards serverless solutions, since it is required at my current job, but also because it seems to be the trend in the market. I built a few microservices using mostly AWS and MongoDB Atlas/Realm. For my personal projects, I've experimented with GraphQL, Express, Mongoose, PostgreSQL, Firebase, etc.",
          test: "Testing it all",
          test_par:
            "And how do I sleep well at night? CI/CD pipelines and automated tests of course! The first framework I used was NightwatchJS, which is built on top of Selenium. I needed a solution for cross-browser testing with Browserstack. Now that Cypress supports more browsers, it is the one I prefer for the front end. For back-end stuff, I use Jest. The CI/CD flows are set using CircleCI, but I also tried Github actions and I use the Amplify pipeline for some use cases.",
        }

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <h2 className={`${styles.subtitle} ${loaded ? "displayed" : ""}`}>
        {text.the} {text.front}
      </h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        <p>{text.front_par}</p>
        <div className={styles.icons}>
          <FaJs />
          <FaHtml5 />
          <FaCss3 />
          <FaSass />
          <FaReact />
          <FaVuejs />
          <SiSvelte />
        </div>
      </div>

      <h2 className={`${styles.subtitle} ${loaded ? "displayed" : ""}`}>
        {text.the} {text.back}
      </h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        <p>{text.back_par}</p>
        <div className={styles.icons}>
          <FaNodeJs />
          <DiMongodb />
          <FaAws />
          <SiGraphql />
          <SiPostgresql />
        </div>
      </div>

      <h2 className={`${styles.subtitle} ${loaded ? "displayed" : ""}`}>
        {text.test}
      </h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        <p>{text.test_par}</p>

        <div className={styles.icons}>
          <SiJest />
          <SiCircleci />
        </div>
      </div>
    </>
  )
}

export default Skillset
