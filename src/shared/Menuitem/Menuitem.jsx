import React from 'react';


const Menuitem = ({item}) => {
    return (
        <div>
            
            <div className='flex justify-center items-center gap-2'>
            <img className='size-16 rounded-[0_200px_200px_200px]' src={item.image} alt="" />
                <div > 
                <h1 className='text-base'>{item.category}</h1>
                    <p>{item.recipe}</p>
               </div>
                <p className='-mt-8 text-yellow-200'>{item.price}</p>
                
            </div>
                
        </div>
    );
};

export default Menuitem;