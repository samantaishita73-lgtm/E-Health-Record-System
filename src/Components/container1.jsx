import react from 'react'
import Pandaimg from '../assets/panda.jpg'
import Menulist from './Menu';

const Container1 = () => {
  return (
    <>
    <Menulist/>
    
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="leftbox">
            <img  src={Pandaimg} alt="Panda Imaige" height={'100%'} width={'100%'}/>
                

            </div>
            </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="left">

            <p
              style={{
                color: 'blue',
                
              }}
            >
              ABOUT US
            </p>

            <h2 style={{ color:'red' }}>
              internships.org.in (A unit of Coding Avengers)
            </h2>
            <p style={{color:'black' }}>
             Internships.org.in is a premier platform dedicated to connecting students, graduates, and young professionals with industry-relevant internship opportunities across various domains. The platform serves as a bridge between academia and the corporate world, offering internships in IT, Engineering, Management, Data Science, Digital Marketing, Finance, and more. With a mission to empower students with hands-on experience, Internships.org.in partners with leading companies, startups, and educational institutions to provide high-quality, skill-based training programs. The platform features both paid and unpaid internships, catering to students looking to gain practical exposure, enhance their resumes, and improve employability. Internships are available in multiple formats—onsite, remote (work-from-home), and hybrid models—to suit the flexibility needs of students. Additionally, the platform provides certifications, career guidance, mentorship, and placement assistance to help interns transition into full-time roles. With a growing network of corporate partners and academic collaborations, Internships.org.in is committed to building the workforce of the future by equipping young professionals with real-world skills and industry insights. Whether you're a student seeking your first internship or a company looking for fresh talent, Internships.org.in is the ideal platform to connect and grow.
            </p>

            <ul type="circle">
                <li>Skilled Instructors</li>
                <li>International Certificate</li>
                <li>Doubt clearing sessions</li>
                <li>Live Online/Hybrid/Offline Classes</li>
                <li>1:1 mentorship</li>
                <li>Class recordings available 24*7</li>
            </ul>

          </div>
        </div>
        


      </div>
    </div>
   </>
  )
}

export default Container1;