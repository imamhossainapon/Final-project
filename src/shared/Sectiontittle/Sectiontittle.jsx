import React from 'react';

const Sectiontittle = ({heading,subheading}) => {
    return (
        <div className=' md:w-3/12 text-center mx-auto '>
            <p className='text-yellow-300 text-sm pb-2'> {subheading}</p>
           
            <h1 className='text-2xl text-bold uppercase py-2 border-y-4'>{heading}</h1>
           

        </div>
    );
};

export default Sectiontittle;