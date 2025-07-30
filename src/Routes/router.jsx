import Root from 'postcss/lib/root';
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from './Main';
import Home from '../Pages/Home/Home';
import OurShop from '../Pages/Ourshop/OurShop';
import OurMenu from '../Pages/Ourmenu/OurMenu';
import DASHBOARD from '../Pages/Dashboard/DASHBOARD';
import ContactUs from '../Pages/Contactus/ContactUs';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/Signup';

export const router = createBrowserRouter([
    {
      path: "/",
     element:<Main></Main>,
     children:[
        {
            path:'/Home',
            element:<Home></Home>
        },
        
        {
            path:'OurMenu',
            element:<OurMenu></OurMenu>
        },
        {
            path:'ourShop/:Cd',
            element:<OurShop></OurShop>
        },
        {
         path:'DashBord',
         element:<DASHBOARD></DASHBOARD>
        },
        {
            path:'ContactUs',
            element:<ContactUs></ContactUs>
        },
        {
            path:'/',
            element:<Login></Login>
        },
        {
            path:'Signup',
            element:<SignUp></SignUp>
        }
     ]
    },
  ]);
  