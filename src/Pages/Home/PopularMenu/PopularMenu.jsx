import React, { useEffect, useState } from 'react';
import Sectiontittle from '../../../shared/Sectiontittle/Sectiontittle';

import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../../shared/Menuitem/MenuCategory';

const PopularMenu = () => {
    let [Menu] =useMenu()
let Popular= Menu.filter(item=>item.category === 'popular')
    return (
       <div className='my-10'>
        <section>
        <Sectiontittle
            subheading={'---Check it out---'}
             heading={'FROM OUR MENU'}></Sectiontittle>
    <div className='gap-10 my-6 w-[80%] mx-auto'>
      <MenuCategory items={Popular}></MenuCategory>
    
</div>        

          


        </section>
       </div>
            
      
    );
};

export default PopularMenu;