import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

const Page404 = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  return (
    <Layout>
      <h1 className={loaded ? "displayed" : ""}>404 - Tsk tsk...</h1>
      <h2 className={loaded ? "displayed" : ""}>You got lost. Shame on you</h2>
      <h2 className={loaded ? "displayed" : ""}>Tu t'es égaré. Honte à toi</h2>
    </Layout>
  )
}

export default Page404
