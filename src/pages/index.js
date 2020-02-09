import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

const Homepage = () => {
  const [displayMenu, toggleDisplayMenu] = useState(false)

  return (
    <>
      <div className="hero">
        <div
          onClick={() => toggleDisplayMenu(!displayMenu)}
          className={`hamburger ${displayMenu ? "displayed" : ""}`}
          role="button"
          tabIndex={0}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav className={displayMenu ? "displayed" : ""}>
          <ul>
            <li><Link>Yo</Link></li>
            <li><Link>Dawg</Link></li>
            <li><Link>Tsup</Link></li>
          </ul>
        </nav>

        <h1>Jeececab</h1>

        <div className="hero__subtitles">
          <h2>Short for Jean-Christophe Séguin Cabana</h2>
          <h2>Front-end developer from Montreal</h2>
        </div>

        <div className="hero__bio">
          <p>
            Hey there. I'm glad you stopped by. I started coding more seriously
            in late 2017, in the goal of becoming a front-end dev by 2019.
            Thanks to a wonderful company, I was able to jump from CX to ITs in
            November 2018. They tried me part-time for 2 months and then hired
            me full-time. I'm still working there and it's amazing. Moral of the
            story: believe in your dreams, yourself, Cthulu, or whatever...
          </p>
        </div>
      </div>
    </>
  )
}

export default Homepage
