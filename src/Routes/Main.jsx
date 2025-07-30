import React from 'react';

import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';


const Main = () => {
    let Location =useLocation()
    console.log(Location);
    let HideFH = ['/Signup','/']
    let NO_H_F = HideFH.includes(Location.pathname)
    
    return (
        <div>
            <AuthContext>
       {!NO_H_F  &&  <Navbar></Navbar>}
         <Outlet></Outlet>
        { !NO_H_F  && <Footer></Footer>}
        </AuthContext>
        </div>
    );
};

export default Main;