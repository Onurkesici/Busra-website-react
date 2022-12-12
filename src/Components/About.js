import React from 'react'
import Icon1 from "../images/icon-1.svg"
import Icon2 from "../images/icon-2.svg"
import Icon3 from "../images/icon-3.svg"
import Icon4 from "../images/icon-4.png"


const About = () => {
  return (
    <section className="section about" aria-label="about" id="about">
      <div className="container">

        <div className="wrapper">

          <div data-reveal="left">
            <h2 className="h2 section-title">What I Do?</h2>

            <p className="section-text">
              Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis
              risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
              magna, vel scelerisque nisl.
            </p>
          </div>

          <ul className="progress-list" data-reveal="right">

            <li className="progress-item">

              <div className="label-wrapper">
                <p>Web Design</p>

                <span className="span">100 %</span>
              </div>

              <div className="progress">
                <div className="progress-fill" style={{width: "100%", backgroundColor: "#c05301a3"}}></div>
              </div>

            </li>

            <li className="progress-item">

              <div className="label-wrapper">
                <p>Mobile Design</p>

                <span className="span">80 %</span>
              </div>

              <div className="progress">
                <div className="progress-fill" style={{width: "80%", backgroundColor: "#6271ac9e"}}></div>
              </div>

            </li>

            <li className="progress-item">

              <div className="label-wrapper">
                <p>Development</p>

                <span className="span">85 %</span>
              </div>

              <div className="progress">
                <div className="progress-fill" style={{width: "85%", backgroundColor: "#777e5296"}}></div>
              </div>

            </li>

            <li className="progress-item">

              <div className="label-wrapper">
                <p>SEO</p>

                <span className="span">90 %</span>
              </div>

              <div className="progress">
                <div className="progress-fill" style={{width: "90%", backgroundColor: "#74637c8a"}}></div>
              </div>

            </li>

          </ul>

        </div>

        <ul className="grid-list">

          <li data-reveal="bottom">
            <div className="about-card">

              <div className="card-icon">
                <img src={Icon1} width="52" height="52" loading="lazy" alt="web design icon" />
              </div>

              <h3 className="h4 card-title">Web Design</h3>

              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                justo cum sociis natoque magnis.
              </p>

            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.25s">
            <div className="about-card">

              <div className="card-icon">
                <img src={Icon2} width="52" height="52" loading="lazy" alt="mobile design icon" />
              </div>

              <h3 className="h4 card-title">Mobile Design</h3>

              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                justo cum sociis natoque magnis.
              </p>

            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.5s">
            <div className="about-card">

              <div className="card-icon">
                <img src={Icon3} width="52" height="52" loading="lazy"
                  alt="web development icon" />
              </div>

              <h3 className="h4 card-title">Development</h3>

              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                justo cum sociis natoque magnis.
              </p>

            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.75s">
            <div className="about-card">

              <div className="card-icon">
                <img src={Icon4} width="52" height="52" loading="lazy" alt="web seo icon" />
              </div>

              <h3 className="h4 card-title">SEO</h3>

              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                justo cum sociis natoque magnis.
              </p>

            </div>
          </li>

        </ul>

      </div>
    </section>
  )
}

export default About