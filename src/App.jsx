import  react from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router'
// import Menulist from './Components/Menu'
import Msgtext from './Components/Msg'
import Msgtext1 from './Components/Msg1'
import Msgtext3 from './Components/Msg3'
import Listtext from './Components/List'
import Container from './Components/container'
import Container1 from './Components/container1'
import Guestlist from './Components/Guestlist'
import Homepage from './Components/Home'
import About from './Components/About'



function App() {
   return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
    
          <Route path='/Container1' element={<Container1/>}></Route>
          <Route path='/Msgtext' element={<Msgtext/>}></Route>
          <Route path='/Guestlist' element={<Guestlist/>}></Route>
          <Route path='/Msgtext3' element={<Msgtext3/>}></Route>
          <Route path='/Listtext' element={<Listtext/>}></Route>
          <Route path='/Container' element={<Container/>}></Route>
          <Route path='/About' element={<About/>}></Route>
      </Routes>
     </Router>

       
       
       {/* <Msgtext/> 
       <Msgtext1/>
       <Msgtext3/>
       <Listtext/> */}

       

       </>
  )
}



const Sixth = () =>{
  return(
    <>
       <h1>Hi Myself Ishita</h1>
    </>
  )
}

const Seventh = () =>{
  return(
    <>
       <h1>Currently pursuing BTech CSE from SNU. </h1>
    </>
  )
}

export default App
