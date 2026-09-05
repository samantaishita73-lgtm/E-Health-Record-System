import react from 'react'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'
import food4 from '../assets/food4.jpg'
import Menulist from './Menu'


const Msgtext = () =>{
    return(
        <>
        <Menulist/>
         <div className='Box'>
                    <div className="container">
                        <h1 style={{color:'red',textAlign:'center'}}>Explore Foods</h1>
                        <div className="row">
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="leftside">
                                    <img src={food1} alt="food1" height="270px" width="100%" />
                                    <p style={{color: 'white',textAlign:'center' }}>Salad</p>
                                    
                                </div>
                            </div>
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="leftside">
                                    <img src={food2} alt="food2" height="270px" width="100%" />
                                    <p style={{color: 'white',textAlign:'center' }}>Burger</p>
               
                                </div>
                            </div>
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="leftside">
                                   <img src={food3} alt="food3" height="270px" width="100%" />
                                   <p style={{color: 'white',textAlign:'center' }}>Woak Rice</p>  
                                </div>
                            </div>
                
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="leftside">
                                   <img src={food4} alt="food4" height="270px" width="100%" />
                                   <p style={{color: 'white',textAlign:'center' }}>Pizza</p>   
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>

          
        </>

    )
}
export default Msgtext

