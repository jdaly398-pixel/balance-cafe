import React from "react";
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactInfo">
                <h1>Contact Us</h1>
                
                <div className="infoSection">
                    <h2>Location</h2>
                    <p>3 Old Ct, Glanmire</p>
                    <p>Cork, Ireland</p>
                </div>

                <div className="infoSection">
                    <h2>Opening Hours</h2>
                    <div className="hours">
                        <div className="day">
                            <span>Monday - Friday</span>
                            <span>8:15 AM - 4:30 PM</span>
                        </div>
                        <div className="day">
                            <span>Saturday</span>
                            <span>9:00 AM - 3:30 PM</span>
                        </div>
                        <div className="day">
                            <span>Sunday</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>

                <div className="infoSection">
                    <h2>Contact</h2>
                    <p>Phone: <a href="tel:+35321482427">+353 21 482 4277</a></p>
                </div>

                <div className="infoSection">
                    <h2>Features</h2>
                    <ul className="featuresList">
                        <li>✓ Outdoor seating</li>
                        <li>✓ Takeaway available</li>
                        <li>✓ Credit cards accepted</li>
                        <li>✓ Wheelchair accessible</li>
                    </ul>
                </div>
            </div>

            <div className="mapSection">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.1234567890123!2d-8.4012345!3d51.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900d7c7c7c7d%3A0x1234567890abcdef!2sBalance%20Cafe!5e0!3m2!1sen!2sie!4v1234567890123!5m2!1sen!2sie"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;