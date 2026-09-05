import React from "react";





const Listtext = ({step,icon, name, description,bottomIcon, color }) =>{
    return(
        <>
        
        
       <div className="row">
            <div className="col-12">
                 {/* <img src={img} alt="..." height={'320px'} width={'100%'} /> */}
                

                    {/* ICON - TOP */}
                    <div
                        className="icon-box"
                        style={{ backgroundColor: color }}
                    >
                        {icon}
                    </div>

                    {/* HEADING - LEFT */}
                    <h5 className="pt-2">
                        {name}
                    </h5>

                    {/* DESCRIPTION - LEFT */}
                    <p className="text-muted">
                        {description}
                    </p>
                    
                    {/*learn more */}
                    <p className="learn-more">
                        Learn more <span>→</span>
                    </p>

                </div>
            </div>
        </>
    );
};

export default Listtext;