import React from "react";
import Listtext from "./List";


const Homedesign2 = () =>{
return(
    <>



<div className="home-container mt-5 mb-5 pt-5">

                <div className="container">

                    

                    <h1 className="home-title">
                        EVERYTHING IN ONE PLACE
                        
                    </h1>
                    <p style={{color:'#5c5b5a',fontSize:'25px'}}>Six essential vaults that replace folders, emails, and scattered portals.<br/> Built for real life, not just hospital workflows.</p>


                    {/* Cards */}
                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="Prop-card1 p-4">

                                <Listtext
                                  icon="📄"
                                 name="Medical Records"
                                description="Diagnoses, discharge summaries, imaging — all searchable and tagged by provider."
                                color="#176cff"
                           />


                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="Prop-card2 p-4">

                               <Listtext
                               icon="🧪"
                               name="Lab Reports"
                                 description="Auto trend charts for CBC, lipids, HbA1c. Spot changes before your doctor does."
                               color="#16c9bd"
                               />

                            </div>

                        </div>


                        {/* Card 3 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="Prop-card3 p-4">

                                <Listtext
                                 icon="💊"
                                 name="Prescriptions"
                                 description="Active meds, dosage, reminders, and interaction checks in one clean view."
                                 color="#c044df"
                               />

                            </div>

                        </div>

                        {/* Card 4 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="Prop-card4 p-4">
                                <Listtext
                                 icon="👥"
                                name="Doctor Details"
                                description="Verified profiles, visit notes, and secure messaging history — never lose a referral."
                              color="#263448"
                            />

                            </div>

                        </div>

                        {/* Card 5 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="Prop-card5 p-4">

                                <Listtext
                                     icon="📅"
                                     name="Appointments"
                                     description="Past and upcoming visits synced with calendar, prep checklists included."
                                     color="#20b895"
                                />

                            </div>

                        </div>

                        {/* Card 6 */}
                        <div className="col-md-6 col-lg-4 col-sm-12">

                            <div className="Prop-card6 p-4">

                                <Listtext
                                     icon="🕘"
                                      name="Health History"
                                     description="Family history, vaccines, allergies, surgeries — your complete story at a glance."
                                     color="#f7941d"
                                />

                            </div>

                        </div>


                        

                    </div>

                </div>

            </div>
        </>
    );
};
export default  Homedesign2