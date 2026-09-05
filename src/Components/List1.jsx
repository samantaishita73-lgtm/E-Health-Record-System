import React from "react";





const Listtext1 = ({step,icon, name, description,bottomIcon, color }) =>{
    return(
        <>
        
        
       <div className="row">
            <div className="col-12">
                  {/* <img src={img} alt="..." height={'320px'} width={'100%'} ></img> */}
                

                    {/* TOP ICON */} 
                    <div
                        className="Icon-box"
                        style={{
                            backgroundColor: color + "20",
                            color: color
                        }}
                    >
                        {icon}
                    </div>

                    


                    {/* STEP */}
                    <h5
                        className="Step-text pt-2"
                        style={{ color: color }}
                    >
                        {step}
                    </h5>


                    {/* HEADING */}
                    <h2 className="Card-heading">
                        {name}
                    </h2>


                    {/* SMALL LINE */}
                    <div
                        className="Card-line"
                        style={{ backgroundColor: color }}
                    ></div>


                    {/* DESCRIPTION */}
                    <p className="Card-description">
                        {description}
                    </p>


                    


                </div>
            </div>
        </>
    );
};

export default Listtext1;