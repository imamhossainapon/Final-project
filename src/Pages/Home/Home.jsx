import React from "react";
import Banner from "./BAnner/Banner";
import Category from "./Category/Category";
import Chef from "./Chef/Chef";
import PopularMenu from "./PopularMenu/PopularMenu";
import MenuCards from "./MenuCard/MenuCards";
import FeaturedItem from "./Featured/FeaturedItem";
import Testimoals from "./Testimonials/Testimoals";
import { Helmet } from 'react-helmet-async';






const Home = () => {
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