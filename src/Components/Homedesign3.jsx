import React from "react";


import Listtext1 from "./List1"


const Homedesign3 = () =>{
return(
    <>



<div className="home-container mt-5 mb-5 pt-5">

                <div className="container">

                    
                    <div className="three-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <h1 className="Home-title">
                        HOW MEDIVAULT WORKS 
                    </h1>
                    <p style={{color:'#5c5b5a',fontSize:'25px',textAlign:'center'}}>Our goal is to help you simplify your medical records and<br />make healthcare hassle-free for you, every step of the way.</p>
                   {/* Cards */}
          <div className="row g-4 mt-4">

            {/* Card 1 */}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="Prop-Card1 p-4">

                <Listtext1
                  step="Step 1"
                  icon="↓"
                  name="Create Your Profile"
                  description="Create your secure health profile with your basic information."
                 
                  color="#7045d8"
                />

              </div>
            </div>

          
             

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="Prop-Card2 p-4">

                <Listtext1
                  step="Step 2"
                  icon="📄"
                  name="Upload Medical Records"
                  description="Upload prescriptions, reports, test results and other medical documents."
                 
                  color="#176cff"
                />

              </div>
            </div>



            {/* Card 3 */}
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="Prop-Card3 p-4">

                <Listtext1
                  step="Step 3"
                  icon="♡"
                  name="Access Your Records"
                  description="View your complete health information anytime from one secure place."
                  
                  color="#16bdb5"
                />

              </div>
            </div>
                        

                    </div>

                </div>

            </div>
        </>
    );
};
export default  Homedesign3