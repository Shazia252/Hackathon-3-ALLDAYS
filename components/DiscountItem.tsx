import React from 'react'

const DiscountItem = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-[#151875] text-2xl md:text-3xl text-center font-bold mb-6">
      Discount Item</h2>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1 ">
          <div className="flex space-x-3 text-sm text-gray-500 mb-6">
            <span className="underline text-pink-500 text-center cursor-pointer">Wood Chair</span>
            <span className="underline cursor-pointer text-center">Plastic Chair</span>
            <span className="underline cursor-pointer text-center">Sofa Collection</span>
          </div>
          <h3 className="text-2xl font-bold text-[#151875] mb-4">
            20% Discount Of All Products
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <img
            src="/chairdis.png"
            alt="Chair"
            className="rounded-full bg-[#FFF6FB] shadow-md w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem
