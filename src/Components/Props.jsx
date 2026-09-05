import react from "react";
import Listtext from './List';
import Container from './container';



const Props = () => {
    return (
        <>
       
            <div className="container  mb-5">
                <div className="row ">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="prop-card p-3">
                            <Listtext


                                img='Ehealth1.jpg'
                                name='NGO Support Education'
                                description='They operate without direct government control or representation.'
                            />
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="prop-card p-3">
                            <Listtext


                                img='Ehealth3.jpg'
                                name='NGO Support Education'
                                description='They operate without direct government control or representation.'
                            />
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="prop-card p-3">
                            <Listtext


                                img='Ehealth2.jpg'
                                name='NGO Support Education'
                                description='They operate without direct government control or representation.'
                            />
                        </div>
                    </div>



                </div>
            </div>

            <div className="Netflix">
                
                
                <div className="container mb-5">
                    <h1 style={{color:'red' ,textAlign:'center' }}>NETFLIX</h1>
                    <h4 style={{color:'white',textAlign:'center' }}>All Netflix Series Download From Here</h4>
                    <div className="row ">
                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='stranger_things.jpg'
                                    name='volume 1'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='All of Us dead.jpeg'
                                    name='season 2'
                                   // description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='spider_man.jpg'
                                    name='Season 4'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='see_you_19th.jpg'
                                    name='Phase 1'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container   mb-5 ">
                    <div className="row"> 
                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='king_the_land.jpg'
                                    name='Phase 3'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>

                        {/* <div className="container mt-5 mb-5"> */}
                        {/* <div className="row"> */}
                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='the-witcher.jpg'
                                    name='Season 3'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>

                        {/* <div className="container mt-5 mb-5">
                <div className="row"> */}
                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='adolescence.jpg'
                                    name='Phase 2'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-12">
                            <div className="Netflix-card p-3">
                                <Container


                                    img='XO-Kitty.jpg'
                                    name='Season 4'
                                    //description='They operate without direct government control or representation.'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div> 





        </>
    )
}
export default Props