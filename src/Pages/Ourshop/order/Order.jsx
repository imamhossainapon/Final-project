import Ordercard from "./ordercard/Ordercard";
import React, { useState } from 'react';

const Order = ({items}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const validData = Array.isArray(items) ? items : [];

  const totalPages = Math.ceil(validData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = validData.slice(startIndex, endIndex);

  return (
    <div className='text-center'>
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {currentItems.map((item, index) => (
          <Ordercard  key={item._id}  item={item} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Order;