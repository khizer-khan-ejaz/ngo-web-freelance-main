import React from "react";
import Nav from "./Nav";
import Footer from "./footer";

const About=()=>{
return(
    <>
    <Nav/>
    <section className="bg-"style={{background:'#FDFFE1'  }}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1 className="text-[80px]"     style={{ color:"green" }}            >About Us</h1>
              <p className="text-gray-200" style={{color:'black'  }}>
              PHRMS (People's Health & Rights Movement Society) is a non-governmental organization (NGO) dedicated to helping children access education. Their mission revolves around providing underprivileged and marginalized children with the necessary resources, tools, and support to pursue their studies. The organization works in various capacities to ensure that children, regardless of their socioeconomic background, receive quality education and have the opportunity to achieve their full potential.

             </p>
            </div>
            <div className="col-md-4">
              <img src="assets/img/about-hero.svg" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>

  <section className="ftco-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 d-flex ">
          <div
            className="img img-about align-self-stretch"
            style={{ backgroundImage: "url(images/bg_3.jpg)", width: "100%" }}
          />
        </div>
        <div className="col-md-6 pl-md-5 ">
          <h2 className="mb-4">Welcome to PHRMS</h2>
          <p>
          PHRMS (People's Health & Rights Movement Society) is a non-governmental organization (NGO) dedicated to helping children access education. Their mission revolves around providing underprivileged and marginalized children with the necessary resources, tools, and support to pursue their studies. The organization works in various capacities to ensure that children, regardless of their socioeconomic background, receive quality education and have the opportunity to achieve their full potential.

Key Areas of Focus:
Educational Support: PHRMS offers financial assistance, scholarships, and school supplies to children from low-income families.
After-school Programs: The organization runs after-school tutoring sessions to help children with their studies and improve their academic performance.
Digital Learning: They incorporate digital tools and resources, ensuring children have access to online learning materials and technology.
      </p>
          
          
        </div>
      </div>
    </div>
  </section>
  


 
  
  <Footer/>
</>

)

}
export default About;