import react from 'react';
import sliderimg1 from '../assets/slider1.png'
import sliderimg2 from '../assets/slider2.png'
import sliderimg3 from '../assets/slider3.png'


const Slider = () =>{
    return(
        <>
        <div className='container-fluid slider-section'>
        <div className='row'>
        <div className='col-12 m-0 p-0'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sliderimg1} class="d-block w-100" alt="..." width={'100%'} height={'600px'}/>
    </div>
    <div class="carousel-item">
      <img src={sliderimg2} class="d-block w-100" alt="..." width={'100%'} height={'600px'}/>
    </div>
    <div class="carousel-item">
      <img src={sliderimg3} class="d-block w-100" alt="..." width={'100%'} height={'600px'}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 </div>

        </div>
        </div>
        
        <div className='container feature-section'> 
        <div className='row'>
        <div className='col-12 m-0 p-0'></div>
        <span className="privacy-label mb-3">
                     PRIVACY FIRST
        </span>
              <h1 style={{ color: '#00020c', textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>YOUR RECORDS,<span style={{ color: '#220bf2', fontWeight: 'bold' }}>YOURS ALONE</span> </h1>
              <p style={{ color: '#5c5b5a', textAlign: 'center', fontSize: '22px' }}> MediVault is a digital health record platform that brings your important medical information together in one organized place. Store prescriptions, laboratory reports, medical documents, appointments, and health history without having to search through scattered files.

                Whether you're visiting a doctor, seeking a second opinion, or simply keeping track of your health journey, MediVault helps you access the information you need more easily. Your health information belongs to you—and MediVault is designed to put you in control.</p>
                
                 {/* 4 spans in ONE ROW */}
          <div className="row mt-5">

            <div className="col-md-3 col-sm-6 col-12 text-center">
              <span className="Privacy-label"><i className="fa-solid fa-check"></i>
                Secure & Private
              </span>
            </div>

            <div className="col-md-3 col-sm-6 col-12 text-center">
              <span className="Privacy-label"><i className="fa-solid fa-check"></i>
                Easy Access
              </span>
            </div>

            <div className="col-md-3 col-sm-6 col-12 text-center">
              <span className="Privacy-label"><i className="fa-solid fa-check"></i>
                Organized Records
              </span>
            </div>

            <div className="col-md-3 col-sm-6 col-12 text-center">
              <span className="Privacy-label"><i className="fa-solid fa-check"></i>
                Always In Control
              </span>
            </div>
            </div>
            </div>
            </div>
            





          </>
          )
}
          export default Slider