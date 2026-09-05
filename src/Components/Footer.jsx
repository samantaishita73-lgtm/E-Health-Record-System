import React from "react";
import logo from "../assets/Ehealth.jpg";
const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Left */}
                
                <div className="footer-left">

                    <h2 className="footer-logo">
                        🛡️ MediVault
                    </h2>



                   <p>
                        Privacy-first electronic health record vault.
                        <br />
                        Secure, organized, and built for patients — not
                        <br />
                        platforms.
                    </p>

                    <div className="social">
                        <span>𝕏</span>
                        <span>in</span>
                        <span>ig</span>
                    </div>

                    
                </div>


                {/* Explore */}
                <div>
                    <h4>EXPLORE</h4>

                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Security</a>
                    <a href="#">How it Works</a>
                    <a href="#">Pricing</a>
                    <a href="#">Careers</a>
                </div>


                {/* Services */}
                <div>
                    <h4>SERVICES</h4>

                    <a href="#">Medical Records</a>
                    <a href="#">Lab Reports</a>
                    <a href="#">Prescriptions</a>
                    <a href="#">Doctor Network</a>
                    <a href="#">Appointments</a>
                    <a href="#">Health History</a>
                </div>


                {/* Contact */}
                <div>
                    <h4>CONTACT</h4>

                    <p>
                        support@medivault.health
                        <br />
                        +1 (415) 555-0142
                    </p>

                    <p>
                     548 Park Street, Kolkata, West Bengal
                    <br />
                    700016, India</p>

                    <div className="newsletter">

                        <h5>Get product updates</h5>

                        <div className="email-box">
                            <input
                                type="email"
                                placeholder="you@email.com"
                            />

                            <button>Join</button>
                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    © 2026 MediVault Inc. All rights reserved.
                    
                </p>

                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Security</a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;