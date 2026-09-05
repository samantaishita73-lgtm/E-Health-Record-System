import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.jpg'

// let x=10;
// let y=20;
// let sum=x+y;


const Menulist = () =>{
    return(
        <>
    
            <div className="container-fluid header-menu">
                {/* <div className="container"> */}
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-12">
                            <img src={logo} alt="Logo" height={'100px'} width={'200px'} />
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 menu-area">
                            

        <nav>
            <ul>
                <li><NavLink to='/Container1' className={'menutab'}>Home</NavLink></li>
                <li><NavLink to='/Guestlist' className={'menutab'}>Features</NavLink></li>
                <li><NavLink to='/Msgtext3' className={'menutab'}>Health Records</NavLink></li>
                <li><NavLink to='/Listtext' className={'menutab'}>Appointments</NavLink></li>
                <li><NavLink to='/Msgtext' className={'menutab'}>Doctors</NavLink></li>
                <li><NavLink to='/' className={'menutab'}>Services</NavLink></li>
                <li><NavLink to='/About' className={'menutab'}>About Us</NavLink></li>
                <li><NavLink to='/Container' className={'menutab'}>Contact Us</NavLink></li>
                
                

{/*       
           <h3>{`sum of number :${sum}`}</h3>
           <p>{`${x} + ${y} total number = ${x+y}`}</p>
           <p>{`${x} - ${y} total number = ${x-y}`}</p>
           <p>{`${x} * ${y} total number = ${x*y}`}</p>
           <p>{`${x} / ${y} total number = ${x/y}`}</p> */}

            </ul>
         </nav>

         </div>
         <div className="col-md-3 col-lg-3 col-sm-12 top-right">
                    <NavLink to='/' className="menuright"></NavLink>
                    <button className="button"><i className="fa-solid fa-user"></i>Login</button>
                    <button className="btn btn">Register<i className="fa-solid fa-arrow-right-long"></i></button>
                    
                </div>
      </div>

       
      
    {/* </div> */}
 </div>
 

        </>
    )
}

export default Menulist