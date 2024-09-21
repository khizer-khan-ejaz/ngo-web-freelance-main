import React from 'react'
import Footer from "../comonents/footer";
import Nav from "../comonents/Nav"

const Health = () => {
  return (
    <div>

        <Nav/>

        <section className="bg"style={{background:'#FEFFF3'  }}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1 className="text-[80px]"style={{color:"rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important"}}>Health</h1>
              <p className="text-gray-200"style={{color:'black'  }}>
               
PHRMS' Health Support initiative is aimed at ensuring that children and their families have access to the healthcare they need, recognizing that good health is essential for children to succeed in education and life. This program focuses on addressing both immediate and long-term health needs of children, particularly those from low-income and marginalized backgrounds.
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/health-main.png" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section"style={{background:'#e6e9e6'  }}>
    <div className="container flex gap-[40px] flex-col">

      <div className="row d-flex">
        <div className="col-md-6 d-flex ">
          <div
            className="img img-about align-self-stretch"
            style={{ backgroundImage: "url(images/health-1.jpg)", width: "100%" }}
          />
        </div>
        <div className="col-md-6 pl-md-5 ">
          <h3 className="mb-4"   > Conducting health education and awareness campaigns. </h3>
          <p>
          Routine Health Check-ups: PHRMS organizes regular health camps in communities and schools to provide free medical check-ups for children. These camps focus on early diagnosis of common health issues such as malnutrition, anemia, and vision or dental problems.Routine Health Check-ups: PHRMS organizes regular health camps in communities and schools to provide free medical check-ups for children. These camps focus on early diagnosis of common health issues such as malnutrition, anemia, and vision or dental problems.
          </p>
          <p>
          Vaccination Drives: To protect children from preventable diseases, PHRMS collaborates with local health authorities to conduct vaccination campaigns, ensuring children receive timely immunization
          </p>
        </div>
      </div>

      <div className="row d-flex">
       
        <div className="col-md-6 pl-md-5 ">
          <h2 className="mb-4"  style={{color:"rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important"}}> Distribute essential medications and supplies. </h2>
          <p>
          Mid-Day Meal Programs: In areas where malnutrition is prevalent, PHRMS works with schools to provide nutritious meals during the school day. These meals often serve as a key source of nourishment for children and help improve their concentration and performance in class.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>

        <div className="col-md-6 d-flex ">
          <div
            className="img img-about align-self-stretch"
            style={{ backgroundImage: "url(images/health-2.jpg)", width: "100%" }}
          />
        </div>

      </div>

      <div className="row d-flex">
        <div className="col-md-6 d-flex ">
          <div
            className="img img-about align-self-stretch"
            style={{ backgroundImage: "url(images/health-3.jpg)", width: "100%" }}
          />
        </div>
        <div className="col-md-6 pl-md-5 ">
          <h2 className="mb-4" style={{color:"rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important"}}> Provide financial support for medical equipment for individuals with disabilities </h2>
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>
      </div>

      <div className="row d-flex">
       
       <div className="col-md-6 pl-md-5 ">
         <h2 className="mb-4"  style={{color:"rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important"}}> Offer financial assistance programs to help individuals cover hospital bills and medical expenses. </h2>
         <p>
           The Big Oxmox advised her not to do so, because there were thousands
           of bad Commas, wild Question Marks and devious Semikoli, but the
           Little Blind Text didn’t listen. She packed her seven versalia, put
           her initial into the belt and made herself on the way.
         </p>
         <p>
           On her way she met a copy. The copy warned the Little Blind Text,
           that where it came from it would have been rewritten a thousand
           times and everything that was left from its origin would be the word
           "and" and the Little Blind Text should turn around and return to its
           own, safe country. But nothing the copy said could convince her and
           so it didn’t take long until a few insidious Copy Writers ambushed
           her, made her drunk with Longe and Parole and dragged her into their
           agency, where they abused her for their.
         </p>
       </div>

       <div className="col-md-6 d-flex ">
         <div
           className="img img-about align-self-stretch"
           style={{ backgroundImage: "url(images/health-4.jpg)", width: "100%" }}
         />
       </div>

     </div>

      

    </div>
  </section>

        <Footer/>
    </div>
  )
}

export default Health
