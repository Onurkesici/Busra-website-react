import React from 'react'
import Project1 from "../images/interior project 1.png"
import Project2 from "../images/int project-2.png"
import Project3 from "../images/interior project 3rev.png"
import Project4 from "../images/furn project-4.png"

const Project = () => {
  return (
    <section className="section project" aria-labelledby="project-label" id="project">
      <div className="container">

        <div className="title-wrapper" data-reveal="top">

          <div>
            <h2 className="h2 section-title" id="project-label">Latest Projects</h2>

            <p className="section-text">
              Check out some of my latest projects with creative ideas.
            </p>
          </div>

          <a href="https://www.instagram.com/busraksici_/" target="_blank" className="btn btn-secondary">See All Projects</a>

        </div>

        <ul className="grid-list">

          <li>
            <div className="project-card project-card-1" style={{backgroundColor: "#c053011f"}}>

              <div className="card-content" data-reveal="left">

                <p className="card-tag" style={{color: "#c05301"}}>Web Design</p>

                <h3 className="h3 card-title">Snowlake Theme</h3>

                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                  porta felis euismod semper. Fusce dapibus tellus cursus.
                </p>

                <a href="./html/projects-1.html" className="btn-text" style={{color: "#c05301"}}>
                  <span className="span">See Project</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>

              <figure className="card-banner" data-reveal="right">
                <img src={Project1} width="650" height="370" loading="lazy" alt="Web Design"
                  className="w-100" />
              </figure>

            </div>
          </li>

          <li>
            <div className="project-card project-card-2" style={{backgroundColor: "#91acbd26"}}>

              <div className="card-content" data-reveal="right">

                <p className=" card-tag" style={{color: "#6271ac"}}>Mobile Design</p>

                <h3 className="h3 card-title">Budget App</h3>

                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                  porta felis euismod semper. Fusce dapibus tellus cursus.
                </p>

                <a href="./html/projects-2.html" className="btn-text" style={{color: "#6271ac"}}>
                  <span className="span">See Project</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>

              <figure className="card-banner" data-reveal="left">
                <img src={Project2} width="600" height="367" loading="lazy" alt="Web Design"
                  className="w-100" />
              </figure>

            </div>
          </li>

          <li>
            <div className="project-card project-card-3" style={{backgroundColor: "#c4cf882e"}}>

              <div className="card-content" data-reveal="left">

                <p className=" card-tag" style={{color: "#777e52"}}>Web Design</p>

                <h3 className="h3 card-title">Missio Theme</h3>

                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque
                  id ligula felis.
                </p>

                <a href="./html/projects-3.html" className="btn-text" style={{color: "#777e52"}}>
                  <span className="span">See Project</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>

              <figure className="card-banner" data-reveal="right">
                <img src={Project3} width="600" height="367" loading="lazy" alt="Web Design"
                  className="w-100" />
              </figure>

            </div>
          </li>

          <li>
            <div className="project-card project-card-4" style={{backgroundColor: "#b199b03b"}}>

              <div className="card-content" data-reveal="left">

                <p className=" card-tag" style={{color: "#74637c"}}>Mobile Design</p>

                <h3 className="h3 card-title">Storage App</h3>

                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                  porta felis euismod semper.
                </p>

                <a href="./html/projects-4.html" className="btn-text" style={{color: "#74637c"}}>
                  <span className="span">See Project</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>

              <figure className="card-banner" data-reveal="right">
                <img src={Project4} width="620" height="370" loading="lazy" alt="Mobile Design"
                  className="w-100" />
              </figure>

            </div>
          </li>

        </ul> 

      </div>
    </section>
  )
}

export default Project