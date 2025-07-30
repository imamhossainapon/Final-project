import React from 'react';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/dashboard/image-5.jpg'
const DASHBOARD = () => {
    return (
        <div>

            <Cover img={img} h1={'Would you like to try a dish?'} p={'Dasboard'}></Cover>
        </div>
    );
};

export default DASHBOARD;