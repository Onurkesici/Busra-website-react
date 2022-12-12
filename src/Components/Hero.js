import React from 'react'
import Busu from "../images/busu.jpg"
import HeroShape from "../images/hero-shape.png"

const Hero = () => {
    return (


            <section className="section hero" aria-label="home">
                <div className="container">

                    <figure className="hero-banner">
                        <img src={Busu} width="560" height="540" alt="Büşra" className="w-100" data-reveal="top" />

                        <img src={HeroShape} width="203" height="91" alt="250+ Projects Done" className="shape"
                            data-reveal="top" data-reveal-delay="0.25s" />
                    </figure>

                    <div className="hero-content">

                        <h1 className="h1 hero-title" data-reveal="top" data-reveal-delay="0.5s">
                            I'm User Interface Designer & Developer.
                        </h1>

                        <p className="section-text" data-reveal="top" data-reveal-delay="0.75s">
                            Hello! I'm Büşra, a freelance user interface designer & developer based in London. I’m very passionate
                            about the work that I do.
                        </p>

                        <div className="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
                            <a href="#project" className="btn btn-primary">See My Works</a>

                            <a href="#contact" className="btn btn-secondary">Contact Me</a>
                        </div>

                    </div>

                </div>
            </section>







            
    )
}

export default Hero