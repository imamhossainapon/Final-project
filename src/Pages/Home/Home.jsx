import React, { useContext, useEffect } from "react";
import Banner from "./BAnner/Banner";
import Category from "./Category/Category";
import Chef from "./Chef/Chef";
import PopularMenu from "./PopularMenu/PopularMenu";
import MenuCards from "./MenuCard/MenuCards";
import FeaturedItem from "./Featured/FeaturedItem";
import Testimoals from "./Testimonials/Testimoals";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../../Provider/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
      const { user } = useContext(AuthContext);
      let navigate =useNavigate()
      useEffect(() => {
    // যদি user লগইন থাকে তাহলে Home পেজে রিডাইরেক্ট করো
    if (user) {
      navigate('/Home');
    } 
  }, [user, navigate]);

    return (
        <div>
<Helmet>
    <title>final || home</title>
</Helmet>
         <Banner></Banner>
         <Category></Category>
         <Chef></Chef>
      <PopularMenu></PopularMenu>
      <MenuCards></MenuCards>
      <FeaturedItem></FeaturedItem>
      <Testimoals></Testimoals>
        </div>
    );
};

export default Home;