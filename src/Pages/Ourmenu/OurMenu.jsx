import React from 'react';

import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import Todaysoffer from './Todaysoffer/Todaysoffer';


const OurMenu = () => {
    return (
        <div>
          <Helmet>
              <title>final || OurMenu</title>
          </Helmet>
         <Cover img={img} p={'Would you like to try a dish?'} h1={'OUR MENU'}></Cover>
        <Todaysoffer></Todaysoffer>
        </div>
    );
};

export default OurMenu;