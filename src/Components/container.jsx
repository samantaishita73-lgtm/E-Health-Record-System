import React from "react";




const Container = ({img,name,description}) =>{
    return(
        <>
        
       <div className="row">
            <div className="col-12">
                <img src={img} alt="..." height={'320px'} width={'100%'} />
                <h5 className='text-center pt-2'>{name}</h5>
                <p className='text-center text-muted'>{description}</p>
            </div>
        </div>

    </>
  );
};

export default Container;