import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

window.$ = window.jQuery = $;


const CarouselComponent = () => {
  return (
    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active"style={{background:'#FEFFF3'  }}>
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              
                <img className="img-fluid" src="./assets/img/20231216_123355.jpg" alt="Slide 3" />
              
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 text-success"><b><img src=" "/></b> </h1>
                  <h3 className="h2">PHRMS (People's Health & Rights Movement Society)</h3>
                  <p>
                  Mid-Day Meal Programs: In areas where malnutrition is prevalent, PHRMS works with schools to provide nutritious meals during the school day. These meals often serve as a key source of nourishment for children and help improve their concentration and performance in class. ,
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item"style={{background:'#FEFFF3'  }}>
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last"style={{background:'#FEFFF3'  }}>
                <img className="img-fluid" src="./assets/img/20230812_130713.jpg" alt="Slide 3" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1"> School Partnerships and Community Support</h1>
                
                  <p>Stationery Kits: PHRMS distributes school kits that include notebooks, pens, pencils, erasers, and other essentials. These kits are distributed at the beginning of each school year or term to ensure children have the basic tools they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item"style={{background:'#FEFFF3'  }}>
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last"style={{background:'#FEFFF3'  }}>
                <img className="img-fluid" src="./assets/img/7.jpg" alt="Slide 3" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1"> Provision of School Supplies</h1>
                
                  <p>Stationery Kits: PHRMS distributes school kits that include notebooks, pens, pencils, erasers, and other essentials. These kits are distributed at the beginning of each school year or term to ensure children have the basic tools they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </a>
      <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </div>
  );
};

export default CarouselComponent;
