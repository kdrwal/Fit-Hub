
import './App.css';
import { Link, Routes, Route, BrowserRouter, Outlet, useLocation } from 'react-router-dom';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import WorkoutRoutines from './pages/WorkoutRoutines';
import HomeAdmin from './pages/HomeAdmin';
import TrainersAdmin from './pages/TrainersAdmin';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardAdmin from './pages/DashboardAdmin';
import ProductsAdmin from './pages/ProductsAdmin';
import CustomersAdmin from './pages/CustomersAdmin';

import React, { useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const Wrapper = ({ children }) => {

    const location = useLocation();

    useLayoutEffect(() => {

      document.documentElement.scrollTo(0, 0);

    }, [location.pathname]);

    return children

  }

  return (
    <div className="App">
      <BrowserRouter>
      <Wrapper>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Layout />} >
          
          <Route path='contact' element={<Contact />} />
          <Route index element={<Home />} />
          <Route path='articles' element={<Articles />} />
          <Route path='workoutroutines' element={<WorkoutRoutines />} />

          <Route path='about' element={<About />} />
          

        </Route>
        <Route path='/admin' element={<HomeAdmin />} />
        <Route path='/admin/dashboard' element={<DashboardAdmin />} />
        <Route path='/admin/products' element={<ProductsAdmin />} />
        <Route path='/admin/trainers' element={<TrainersAdmin />} />
        <Route path='/admin/customers' element={<CustomersAdmin />} />
        
        

      </Routes>
      </Wrapper>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
