import React from 'react';
import Sectiontittle from '../../../shared/Sectiontittle/Sectiontittle';
import img1 from '../../../assets/home/featured.jpg'
const FeaturedItem = () => {
    return (
        <div>
            <section className='w-[90%] mx-auto h-[500px] my-36  py-16 bg-fixed bg-center bg-cover ' style={{ backgroundImage: `url(${img1})`}}
            >
            <Sectiontittle subheading={'---Check it out---'} heading={'FROM OUR MENU'}>
            </Sectiontittle> 
              <div className='md:flex justify-center items-center md:w-4/6 mx-auto my-4 gap-6'>
                <img className='size-56' src={img1} alt="" />
                <div className=' mt-4 mx-auto gap-6' >
                <p className='text-white' >March 20, 2023
WHERE CAN I GET SOME?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
<button className='bg-slate-800 rounded-lg text-white px-4 my-4 '>Read More</button>
                </div>
              
              </div>
            </section>
        
        </div>
    );
};

export default FeaturedItem;