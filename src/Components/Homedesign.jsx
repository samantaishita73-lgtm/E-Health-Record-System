import React from "react";
import Listtext from "./List";


const Homedesign = () => {
    return (
        <>
            <div className=" home-container mt-5 mb-5 pt-5"> 

                <div className="container">

                    {/* Section Heading */}
                    <h6 style={{ color: "blue" }}>
                        WHY MEDIVAULT?
                    </h6>

                    <h1 className="home-title">
                        Healthcare that finally
                        <br />
                        works for the patient.
                    </h1>


                    {/* Cards */}
                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="prop-card p-4">

                                <Listtext
                                    icon="🔒"
                                    name="Secure Records"
                                    description="Military-grade AES-256 encryption, biometric lock, and zero-knowledge storage. Even our team can't access your data."
                                    color="#176cff"
                                />

                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="prop-card p-4">

                                <Listtext
                                    icon="📋"
                                    name="Organized Health Data"
                                    description="Auto-categorized timeline of labs, imaging, prescriptions and notes. Search, filter, and understand your history in seconds."

                                    color="#16c9bd"
                                />

                            </div>

                        </div>


                        {/* Card 3 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="prop-card p-4">

                                <Listtext
                                    icon="🩺"
                                    name="Accessible Healthcare"
                                    description="One-tap sharing with doctors, second opinions, or family. Access the right health information whenever you need it."
                                    color="#10182d"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div> 
        </>
    );
};

export default Homedesign;