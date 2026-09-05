import react from 'react'

const StyleSheet = {
    textAlign:'center',
    color:'yellow',
    backgroundColor:'#320dec',
    width:'600px',
    margin:'auto',
    height: '130px',
}
const StyleSheet1 = {
    color:'white',
    textAlign:'center',
}
const StyleSheet2 = {
    color:'Red',
    textAlign:'center',
}
const StyleSheet3 = {
    color:'white',
    textAlign:'center',
    backgroundColor:'#33a9e8',
    width:'200px',
    height:'30px',
    margin:'auto',
    
}

const Msgtext1 = () =>{
    return(
        <>
        <Menulist/>
      <div style={StyleSheet}>
        <p>2nd International Conference</p>

        <p style={StyleSheet1}>
          INTERNATIONAL CONFERENCE ON ADVANCES IN CHEMICAL AND MATERIALS SCIENCES
        </p>
        <p style={StyleSheet2}><b>( ACMS-2026 )</b></p>
      </div>
       <div style={StyleSheet3}>
        <p>April 12 - 14, 2026</p>
        </div>

        
      
      </>
    )
}
export default Msgtext1