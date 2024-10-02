import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout ({children}) {
    return (
        <>
        <NavBar />
        {children}
        <Outlet>
        
        </Outlet>

        
        <Footer />
        </>
    );
}
export default Layout;