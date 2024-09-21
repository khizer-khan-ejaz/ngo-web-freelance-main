import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer=()=>{
    return(
      <footer className="ftco-footer ftco-section img">
  <div className="overlay" />
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-3">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">About Us</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
  <li>
    <a href="#">
      <i className="fab fa-twitter" />
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fab fa-facebook-f" />
    </a>
  </li>
  <li>
    <a href="#">
      <i className="fab fa-instagram" />
    </a>
  </li>
</ul>
        </div>
      </div>
      
      <div className="col-md-2">
        <div className="ftco-footer-widget mb-4 ml-md-4">
          <h2 className="ftco-heading-2">Site Links</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="py-2 d-block">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Donate
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Causes
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Event
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Have a Questions?</h2>
          <div className="block-23 mb-3">
          <ul>
  <li>
    <span className="fas fa-map-marker-alt" />
    <span className="text">C-145, Hardevpuri Durgapuri, Delhi</span>
  </li>
  <li>
    <a href="#">
      <span className="fas fa-phone-alt" />
      <span className="text">7428089818</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span className="fas fa-envelope"/> 
      <span className="text">phrms.soc@gmail.com</span>
    </a>
  </li>
</ul>

          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved {" "}
          <i className="icon-heart" aria-hidden="true" /> by{" "}
          <a href="" target="_blank">
            phrms
          </a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </div>
</footer>

    )

}
export default Footer;