import React, { useEffect, useState } from 'react';
import Sectiontittle from '../../../shared/Sectiontittle/Sectiontittle';

import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../../shared/Menuitem/MenuCategory';
import img from '../../../assets/menu/dessert-bg.jpeg'
import img1 from '../../../assets/menu/pizza-bg.jpg'
import img2 from '../../../assets/menu/salad-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'


const Todaysoffer = () => {
    let [Menu]= useMenu()
    let Offerd = Menu.filter(dessert=>dessert.category ==='offered')
    let Desserts = Menu.filter(dessert=>dessert.category ==='dessert')
    let PIZZA = Menu.filter(dessert=>dessert.category ==='pizza')
    let SALADS = Menu.filter(dessert=>dessert.category ==='salad')
    let SOUPS = Menu.filter(dessert=>dessert.category ==='soup')
    return (
        <div className='my-10'>
            <Sectiontittle heading={"TODAY'S OFFER"} subheading={"---Don't miss---"}></Sectiontittle>

            <div className='w-[80%] mx-auto gap-5'>
            <MenuCategory items={Offerd} ></MenuCategory>
            <MenuCategory items={Desserts} Coverimg={img} tittle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} h1={'dessert'}></MenuCategory>
            <MenuCategory items={PIZZA} Coverimg={img1} tittle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} h1={'pizza'}></MenuCategory>
            <MenuCategory items={SALADS} Coverimg={img2} tittle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} h1={'salad'}></MenuCategory>
            <MenuCategory items={SOUPS} Coverimg={img3} tittle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} h1={'soup'}></MenuCategory>

            </div>
           

        </div>
    );
};

export default Todaysoffer;