import React from "react";
import './About.css';
import AboutTrainer1 from '../pic/trainer1.jpg';
import AboutTrainer2 from '../pic/trainer2.jpg';
import Layout from "../components/Layout";



function About() {
    return (
        
            <div className='about-page'>
                <header className='mt-5'>
                    <div className='container h-100 d-flex align-items-center justify-content-center'>
                        <h1 className='text-light'>About Us</h1>
                    </div>
                </header>

                <div className="my-5">
                    <div className='container'>
                        <h2 className='text-center fs-1 mb-2 mb-lg-5 text-uppercase fw-bold text-success'>Welcome to FitHub</h2>
                        <div className='row flex-column-reverse flex-lg-row'></div>
                        <div className='text-center fs-3'>
                            <p>At FitHub, we believe that fitness isn't just about physical strength, it's about
                                empowering individuals to achieve their goals, both inside and outside of the gym. With a commitment to excellence and a
                                passion for holistic wellness, FitHub is more than just a place to work out –
                                it's a community dedicated to helping you become the best version of yourself.
                            </p>
                        </div>
                        <div className="my-5">
                            <h3 className='text-center fs-2 mb-2 mb-lg-5 text-uppercase fw-bold'>Our Mission</h3>
                            <div className='text-center fs-3'>
                                <p>Our mission at FitHub is simple: to inspire and support our members on their journey to a healthier,
                                    happier life. We strive to create an inclusive environment where individuals of all fitness levels
                                    feel welcome and supported in reaching their goals. Whether you're a seasoned athlete or just starting
                                    your fitness journey, FitHub is here to help you succeed.
                                </p>
                            </div>
                        </div>
                        <div className="my-5">
                            <h3 className='text-center fs-2 mb-2 mb-lg-5 text-uppercase fw-bold'>Expert Guidance</h3>
                            <div className='text-center fs-3'>
                                <p>Our team of experienced fitness professionals is here to guide and support you every step of the way.
                                    Whether you're looking for one-on-one personal training, nutritional counseling, or group fitness classes,
                                    our experts are dedicated to helping you reach your full potential. With personalized attention and customized
                                    fitness plans, you'll have the support you need to succeed.
                                </p>
                            </div>
                        </div>



                    <div className='row'>
                        <div className="my-2"></div>
                        <h2 className="mb-4 mb-lg-5 text-success">Our trainers</h2>
                        <div className="my-1"></div>
                        <div className='col-lg- d-flex flex-column align-items-center mb-4 mb-lg-0'>
                            <h2 className="mb-4 mb-lg-1">Trainer Anna: Empowering You to Reach Your Fitness Goals</h2>
                            <img src={AboutTrainer1} className='img-fluid my-5' alt="" />
                            <p className="text-center fs-5">Meet Anna, our dedicated and passionate fitness trainer at FitHub.
                                With years of experience in the fitness industry, Anna brings a wealth of knowledge and expertise to every training session.
                                Specializing in a variety of training modalities, Anna is committed to helping you achieve your fitness goals and unlock your full potential. </p>
                        </div>
                        <div className="my-4"></div>
                        <h2 className="mb-4 mb-lg-1">Trainer George: Unleash Your Inner Athlete with George's Dynamic Training Programs</h2>
                        <div className='col-lg d-flex flex-column align-items-center mb-4 mb-lg-0'>
                            <img src={AboutTrainer2} className='img-fluid my-5' alt="" />
                            <p className="text-center fs-5">Meet George, our energetic and enthusiastic fitness trainer at FitHub. With a background in competitive sports and a passion
                             for helping others succeed, George is dedicated to helping you unleash your inner athlete and achieve peak performance. </p>
                        </div>
                    </div>


                    <div className="my-5"></div>
                    </div>
                </div>
            </div>
        
    );
}

export default About;