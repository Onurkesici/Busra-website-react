import React from 'react'
import Icon5 from "../images/icon-5.png"

const Contact = () => {
  return (
    <section className="section contact" aria-label="contact" id="contact">
      <div className="container">

        <div className="contact-card">

          <div className="contact-content" data-reveal="left">

            <div className="card-icon">
              <img src={Icon5} width="44" height="44" loading="lazy" alt="envelop icon" />
            </div>

            <h2 className="h2 section-title">If you like what you see, let's work together.</h2>

            <p className="section-text">
              I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from
              this contact form and I will get back to you shortly.
            </p>

          </div>

          <form className="contact-form" data-reveal="right" onsubmit="sendEmail(); reset(); return false;">

            <div className="input-wrapper">
              <input id="name" type="text" name="name" placeholder="Name" required className="input-field" />

                <input id="email" type="email" name="email_address" placeholder="Email" required className="input-field" />
                </div>

                <textarea id="message" name="message" placeholder="Message" required className="input-field"></textarea>

                <button type="submit" className="btn btn-secondary">Send message</button>

              </form>

            </div>

        </div>
    </section>
  )
}

export default Contact