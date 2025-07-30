import React from 'react';
import Menuitem from './Menuitem';
import Cover from '../Cover/Cover';
import { Link } from 'react-router';

const MenuCategory = ({items,tittle,Coverimg,h1}) => {
    return (
        <div className='my-6'>{tittle && <Cover img={Coverimg} p={tittle} h1={h1}></Cover>}
         <div className='grid md:grid-cols-2 gap-8'>
            
            {
             items.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
            } 
           
         </div>
         <div className='flex flex-col justify-center items-center my-6'>
         <Link to={`/ourShop/${h1}`}><button className='border-b-2 rounded-xl px-4 py-2 border-black'>order your favorite food</button></Link>
         </div>
         
        </div>
       
    );
};

export default MenuCategory;