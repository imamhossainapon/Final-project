import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';



import img4 from '../../../assets/home/slide4.jpg'
import img2 from '../../../assets/home/slide1.jpg'
import img5 from '../../../assets/home/slide2.jpg'
import img6 from '../../../assets/home/slide3.jpg'

import 'swiper/css/pagination';import Sectiontittle from '../../../shared/Sectiontittle/Sectiontittle';
const Category = () => {
    return (
       <section>
        <Sectiontittle heading={'ORDER ONLINE'} subheading={'---From 11:00am to 10:00pm---'}>  
        </Sectiontittle>
         <div className='my-6'>
              <Swiper
        slidesPerView={4}
        spaceBetween={24}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide><img className='text-white ' src={img2} alt="" />
        <h1 className='text-center text-2xl text-white -mt-32'>Saladss</h1>
       </SwiperSlide>
        
        <SwiperSlide><img className='text-white  ' src={img4} alt="" />
        <h1 className='text-center text-2xl  text-white -mt-32'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide><img className='text-white ' src={img5} alt="" />
        <h1 className='text-center text-2xl text-white -mt-32'>pizzas</h1>

        </SwiperSlide>
        <SwiperSlide><img className='text-white ' src={img6} alt="" />
        <h1 className='text-center text-2xl text-white -mt-32'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide><img className='text-white ' src={img2} alt="" />
        <h1 className='text-center text-2xl text-white -mt-32'>Salads</h1>
       </SwiperSlide>
       <SwiperSlide><img className='text-white  ' src={img4} alt="" />
        <h1 className='text-center text-2xl text-white -mt-32'>desserts</h1>
        </SwiperSlide>
      </Swiper>
        </div>
       </section>
    );
};

export default Category;