import React, { useEffect, useState } from 'react';
import Ordercard from '../../Ourshop/order/ordercard/Ordercard';


const MenuCards = () => {
    
    let [salad,Setsalad]= useState([])
    useEffect(()=>{
       fetch('menu.json')
       .then(res => res.json())
       .then(data=>{
let PopularItem = data.filter( item=> item.category === 'salad')
        Setsalad(PopularItem)
       })
       
    })
    
    return (
        <div className='flex md:flex-row flex-col justify-center items-center gap-4 md:w-[90%] mx-auto my-10'>
       {
        salad.slice(0,3).map(item=><Ordercard key={item._id} item={item}></Ordercard>)
       }

        </div>
    );
};

export default MenuCards;