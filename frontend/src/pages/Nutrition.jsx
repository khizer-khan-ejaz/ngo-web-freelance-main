import React from 'react'
import Footer from "../comonents/footer";
import Nav from "../comonents/Nav"

const Nutrition = () => {
  return (
    <div>

        <Nav/>

        <section className="bg"style={{background:'#FEFFF3'  }}>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1 className="text-[80px]"style={{color:"rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important"}}> Nutrition </h1>
              <p className="text-gray-200"style={{color:'black'}}>
              Nutritional Education: Along with providing food, the organization conducts awareness sessions on the importance of a balanced diet. These sessions target both children and parents, teaching them about affordable and nutritious food options.
              Supplement Programs: PHRMS sometimes provides vitamin and mineral supplements to combat specific deficiencies, such as iron for anemia or vitamin A for vision health, particularly in undernourished children.
              </p>
            </div>
            <div className="col-md-4">
              <img className='lg:min-h-[400px]' src="/images/nutrition-main.png" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* middle section */}
      <div className='container p-[40px]'>

<div className="h-[70vh] flex justify-center items-center relative bg-fixed bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: `url("/images/bg_1.jpg")` }}>
      <div className="absolute z-0 h-full w-full opacity-50 bg-black" 
           style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))" }} />
      <p className="text-white z-10 relative text-center w-1/2 text-xl lg:text-3xl px-4">
      Conducting health
education and
awareness
campaigns.
      </p>
    </div>

    <div className="h-[70vh] flex justify-center items-center relative bg-fixed bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: `url("/images/bg_7.jpg")` }}>
      <div className="absolute z-0 h-full w-full opacity-50 bg-black" 
           style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))" }} />
      <p className="text-white z-10 relative text-center w-1/2 text-xl lg:text-3xl px-4">
      Distribute essential
medications and
supplies.
      </p>
    </div>

  <div className={`h-[70%] flex justify-center items-center relative object-cover bg-cover bg-no-repeat  `}   style={{ backgroundImage: `url("/images/bg_6.jpg")` , backgroundAttachment : "fixed" }} >
    <div className='absolute z-0 h-[100%] w-[100%] opacity-40 bg-black' style={{background : "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))"}} />
    <p className='text-white z-10 relative text-center  w-[50%]'>  Provide financial
support for medical
equipment for
individuals with
disabilities </p>
  </div>

</div>


        <Footer/>
    </div>
  )
}

export default Nutrition
