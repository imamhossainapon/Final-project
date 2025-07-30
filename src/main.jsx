import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/router';

import {  HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
<div className='w-[90%] mx-auto'>  
<RouterProvider router={router} />
 </div>
</HelmetProvider>


    

  </StrictMode>
)
