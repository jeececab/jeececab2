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
} from "react-icons/fa"
import { DiMongodb } from "react-icons/di"

const Skillset = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <h2 className={loaded ? "displayed" : ""}>
        I build Web apps and Websites using modern frameworks
      </h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        <p>
          I think the basics are important (
          <span className={styles.bold}>HTML, CSS, Javascript</span>) and I
          often code in "vanilla" mode, because I enjoy the challenge of
          figuring out solutions from scratch. It helps me better understand
          what some librairies do, and I depend less on them. That being said,
          at work, we use <span className={styles.bold}>ReactJS</span> a lot for
          effeciency and also <span className={styles.bold}>VueJS</span>. This
          Website was made using <span className={styles.bold}>Gatsby</span>,
          because I was curious to experiment with it.
          <br />
        </p>
        <div className={styles.icons}>
          <FaJs />
          <FaHtml5 />
          <FaCss3 />
          <FaReact />
          <FaVuejs />
        </div>
      </div>

      <h2 className={loaded ? "displayed" : ""}>The way of the Fullstack</h2>

      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        <p>
          I know it's a long and constantly evolving road, but becoming a
          fullstack developer is a personal goal of mine. This is why whenever I
          get the chance at work, I try to get assigned to tasks that are more
          in the back-end realm, since I'm getting more and more comfortable on
          the front-end side of things. I was involved on a few serverless
          solutions setup (<span className={styles.bold}>MongoDB</span> Stitch
          endpoints and functions). I also use
          <span className={styles.bold}> NodeJS</span> more and more.
          <br />
        </p>
        <div className={styles.icons}>
          <FaNodeJs />
          <DiMongodb />
          <FaAws />
        </div>
      </div>
    </>
  )
}

export default Skillset
