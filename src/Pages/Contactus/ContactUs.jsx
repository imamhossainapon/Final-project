import React from 'react';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/contact/banner.jpg'
const ContactUs = () => {
    return (
        <div>

            <Cover  img={img} p={'Would you like to try a dish?'} h1={'CONTACT US'}></Cover>
        </div>
    );
};

export default ContactUs;