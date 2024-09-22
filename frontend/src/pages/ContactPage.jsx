import React from 'react'
import Nav from '../comonents/Nav'
import Footer from '../comonents/footer'

const ContactPage = () => {
  return (
    <div>
      <>

      <Nav/>

{/* banner */}
      <section className="bg"style={{background:'#FEFFF3'  }}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1 className="text-[80px]"style={{ color:"green" }}> Contact Us </h1>
              <p className="text-gray-200"style={{ color:"black" }}>
              Workshops and Awareness Campaigns: PHRMS holds workshops for both children and parents on a variety of health topics, including sexual and reproductive health, child healthcare, and disease prevention.
Collaborations with Schools: The organization works with schools to integrate health education into the curriculum, ensuring children learn about maintaining good health and hygiene from a young age.
              </p>
            </div>
            <div className="col-md-4">
              <img src="assets/img/about-hero.svg" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>

 
 {/* form section */}
  <section className="ftco-section contact-section ftco-degree-bg">
    <div className="container">
      <div className="row d-flex mb-5 contact-info">
        <div className="col-md-12 mb-4">
          <h2 className="h4">Contact Information</h2>
        </div>
        <div className="w-100" />
        <div className="col-md-3">
          <p style={{color:"green"}}>
            <span>Address:</span> C-145, Hardevpuri, Delhi
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span>Phone:</span> <a href="tel://7428089818" style={{color:"green"}}>7428089818</a>
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span>Email:</span>
            <a href="mailto:phrms.soc@gmail.com">phrms.soc@gmail.com</a>
          </p>
        </div>
        <div className="col-md-3">
          <p>
            
          </p>
        </div>
      </div>
      <div className="row block-9">
        <div className="col-md-6 pr-md-5">
          <h4 className="mb-4">Do you have any questions?</h4>
          <form action="#">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>

{/* map section */}
        <div className="col-md-6 border border-black" id="map">
        <iframe
  className="w-full h-full"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4483.702194244415!2d77.27810447436347!3d28.646775928198798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc80ac28a93b%3A0x2d1b7ebca1239ff5!2sGeeta%20Colony%2C%20Laxmi%20Nagar%2C%20Delhi%2C%20110031!5e0!3m2!1sen!2sin!4v1695048967387!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


        </div>

      </div>

    </div>
  </section>


{/* footer page */}
  <Footer/>
 
</>

    </div>
  )
}

export default ContactPage
