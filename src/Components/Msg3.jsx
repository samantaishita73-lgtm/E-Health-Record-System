import react from 'react'
import {NavLink} from 'react-router-dom'
import Birdimg from '../assets/bird.png'
import Foximg from '../assets/fox.jpg'
import Lionimg from '../assets/lion.jpg'
import Rabbitimg from '../assets/rabbit.jpg'
import Pandaimg from '../assets/panda.jpg'
import Menulist from './Menu';

const Stylesheet = {
    color:'white',
    textAlign:'center',
    backgroundColor:'#f9fafb',
    width:'1000px',
    height:'200px',
    margin:'auto',
}
const Msgtext3 = () =>{
    return(
        <> 
        <Menulist/>
<div style={Stylesheet}>
    <NavLink to='/Msgtext' className={'Msgtext3'}>
       <img  src={Birdimg} alt="Bird Imaige" height={'200px'} width={'200px'}/>
    </NavLink>

     
        <img  src={Foximg} alt="Fox Imaige" height={'200px'} width={'200px'}/>
    
        
     
         <img  src={Lionimg} alt="Lion Imaige" height={'200px'} width={'200px'}/>
   

    
        <img  src={Rabbitimg} alt="Rabbit Imaige" height={'200px'} width={'200px'}/>
    

    
         <img  src={Pandaimg} alt="Panda Imaige" height={'200px'} width={'200px'}/>
    
</div>
</>
    )
}
export default Msgtext3