import React from "react";
import Layout from "../components/Layout";
import './Contact.css';

function Contact() {
    return(
        
        <div className="contact-page">
        <header className="contact-header d-flex align-items-center justify-content-center text-center text-light">
            <h1>Contact Us</h1>
        </header>
        <div className="container mt-5 bg-white p-5 rounded shadow">
            <h2 className="text-center fs-1 mb-2 mb-lg-5 text-uppercase fw-bold text-success">Get in Touch with Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <h5>How can we assist you?</h5>
                    <div className="my-5"></div>
                    <p>
                        <strong>Join Our Gym</strong><br />
                        Request a tour of our facilities or sign up for a free trial to experience our state-of-the-art equipment and classes.
                    </p>
                    <p>
                    <div className="my-5"></div>
                        <strong>Fitness Consultation</strong><br />
                        Schedule a consultation with our certified trainers to develop a personalized fitness plan tailored to your goals.
                    </p>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
            <div className="my-5"></div>
        </div>
        <div className="my-5"></div>
    </div>
    
    );
}

export default Contact;