import react from 'react'
import food1 from '../assets/picture1.jpg'
import food2 from '../assets/picture2.jpg'
import food3 from '../assets/picture3.jpg'
import food4 from '../assets/picture4.jpg'
import Menulist from './Menu'


const Guestlist = () =>{
    return (
        <>
        <Menulist/>
         <div className='Box'>
                    <div className="container">
                        <h3 style={{color:'Green',textAlign:'center'}}>ORGANIZING SECRETARY</h3>
                        <div className="row">
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="picture">
                                    <img src={food1} alt="food1" height="270px" width="100%" />
                                    
                                </div>
                            </div>
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="picture">
                                    <img src={food2} alt="food2" height="270px" width="100%" />
                                    <p style={{color: 'black',textAlign:'center' }}>Dr.</p> 
                                </div>
                            </div>
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="picture">
                                   <img src={food3} alt="food3" height="270px" width="100%" />  
                                </div>
                            </div>
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="picture">
                                   <img src={food4} alt="food4" height="270px" width="100%" />   
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>

          
        </>

    )
}
export default Guestlist

