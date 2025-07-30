import React from 'react';

const Cover = ({img,p,h1}) => {
    return (
        <div className='mb-10'>
        <div
  className="hero  md:h-[500px] h-[350px]"
  style={{
    backgroundImage:
      `url(${img})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content bg-slate-50 bg-opacity-30  text-center">
    <div className=" md:w-[500px]  w-[350px] mx-auto md:py-5 md:px-20 ">
      <h1 className="mb-5 opacity-100  md:text-5xl text-2xl font-bold">{h1}</h1>
      <p className="mb-5 opacity-100 ">
        {p}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>    
        </div>
    );
};

export default Cover;