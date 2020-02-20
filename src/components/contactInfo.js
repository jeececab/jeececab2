import React, { useState, useEffect } from "react"
import styles from "./contactInfo.module.scss"
import { FaEnvelope } from "react-icons/fa"

const ContactInfo = ({ lang }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <div className={`${styles.text_block} ${loaded ? "displayed" : ""}`}>
        <p>
          {lang === "fr"
            ? "Je ne suis pas en recherche de contrat présentement, mais n'hésitez pas à me contacter si vous avez des questions ou si vous voulez parler de trucs sympathiques."
            : "I'm not looking for work at the moment, but don't hesitate to contact me if you have questions or want to exchange about neat stuff."}
        </p>
      </div>
      <p className={styles.email}>
        <a
          href="mailto:jcseguincabana@gmail.com"
          className={loaded ? "displayed" : ""}
        >
          <FaEnvelope /> jcseguincabana@gmail.com
        </a>
      </p>
    </>
  )
}

export default ContactInfo
