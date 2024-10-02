import React from "react";
import { ContactBtn } from "../components/ContactBtn";
import { WorkoutBtn } from "../components/WorkoutBtn";
import './Home.css';
import AboutIMG from '../pic/test2.jpg';
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Home() {
    return (
        
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold 
                            text-center text-sm-start'>Find your GYM and start now!</h2>
                            <h1 className='mb-5 text-black fw-bold 
                            text-center text-sm-start'>Talk online to trainers and get personal advice online,training plans and diets.</h1>
                            <ContactBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                        <img src={AboutIMG} className="img-fluid w-50" alt="about img" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
                        <p className="text-center fs-5">Welcome to FitHub where fitness meets convenience. Our state-of-the-art facility offers 
                        everything you need to achieve your fitness goals. 
                        Whether you're a beginner or a seasoned athlete, our expert trainers and wide range of equipment cater to all fitness levels. </p>
                        
                        <Link to="/about">
                            <button type="button" className="my-3 btn btn-outline-success btn-lg">More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="menu-section py-5 text-light shadow">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="fs-1 mb-5 text-uppercase fw-bold">Best Workouts for you!</h2>
                    <div className="row mb-5 w-100">
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Week Training Plan</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-between">
                                    <p className="f2-3 mx-2">Chest and Tricpes</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="f2-3 mx-2">Back and Biceps</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="f2-3 mx-2">Shoulders and Triceps</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="f2-3 mx-2">Legs and Biceps</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <WorkoutBtn />
                </div>
            </div>

        </div>
        
    );
}

export default Home;