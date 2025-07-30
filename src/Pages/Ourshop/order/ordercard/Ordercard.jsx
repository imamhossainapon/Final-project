import React from 'react';

const Ordercard = ({item}) => {
   let {price,category,image,recipe,name}=item
   
    return (
 <div>
<div className="card bg-slate-200  w-[300px] h-[400px] shadow-2xl rounded-lg">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <p className=' absolute top-4 right-4'>{price}</p>

  <div className="card-body items-center text-center">

    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>

    <div className="card-actions">
      <button className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
 </div>
    );
};

export default Ordercard;