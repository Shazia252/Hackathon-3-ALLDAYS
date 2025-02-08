import React from 'react'

const UniqueFeature = () => {
  return (
    <div>
      {/* Lower Section */}
       <section className="bg-[#F2F0FF]   h-[579px]">
         <div className="p-[20px]  flex flex-wrap md:flex-nowrap items-center gap-10 px-24">
           <div className="flex-1">
             {/* Product Image */}
             <img
               src="/Chair (3).png"
               alt="Product"
               className="rounded-full bg-[#f3e0eb] shadow-md w-full max-w-sm mx-auto"
             />
           </div>
           <div className="flex-1">
             <h3 className="text-3xl font-bold text-[#151875] mb-4">
               Unique Features Of Latest & Trending Products
             </h3>
             <ul className="text-gray-400 space-y-2 list-disc pl-5">
               <li>
                 All frames constructed with hardwood solids and laminates.
               </li>
               <li>
                 Reinforced with double wood dowels, glue, screws, nails at
                 corner blocks, and machine nails.
               </li>
               <li>Arms, backs, and seats are structurally reinforced.</li>
             </ul>
             <div className="mt-8">
               <button className="bg-pink-600 text-white py-2 px-6 rounded shadow-md hover:bg-pink-700">
                 Add To Cart
               </button>
               <span className="mt-2 text-sm text-[#151875]">B&B Italian Sofa - $32.00</span>
             </div>
           </div>
         </div>
       </section>
    </div>
  )
}

export default UniqueFeature
