import React, { useEffect, useState } from 'react';
import Sectiontittle from '../../../shared/Sectiontittle/Sectiontittle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { DiApple } from "react-icons/di";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Testimoals = () => {

    let [Reviews,SetReview] =useState([])

    useEffect(()=>{
        fetch('Review.json')
        .then(res=>res.json())
        .then(data=>SetReview(data))

    },[])

    return (
        <div>
            <section className='my-10'>
 <Sectiontittle subheading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></Sectiontittle>
<div className='my-8 w-[90%] mx-auto'>

 <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
       
        
        {
Reviews.map(Review=><SwiperSlide key={Review._id} className='text-center'>
<div className='w-[80%] mx-auto'>
<Rating className='w-[50%] mx-auto my-2'
      style={{ maxWidth: 180 }}
      value={Review.Rating}
      readOnly
    />
<div className='flex justify-center items-center mb-8'>
<DiApple  className='size-10' />
<DiApple  className='size-10'/>
</div>
    
    <p>{Review.details}</p>
    <h1 className='text-yellow-300 font-bold'>{Review.name}</h1>
</div>

</SwiperSlide>)
        }
      </Swiper>
      </div>
            </section>
           
        </div>
    );
};

export default Testimoals;