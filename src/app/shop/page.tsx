// "use client"

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// // import product from '@/sanity/schemaTypes/product'
// import { Product } from '../../../types/products';
// import { allProducts } from '@/sanity/lib/queries';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';




// const shop = () => {
//   const [product, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchProducts: Product[] = await client.fetch(allProducts);
//       setProducts(fetchProducts);
//     }
//     fetchProducts();
//   }, [])
//   return (
//     <div>
//     Page Header
//   <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
//   <div className="container md:w-[1170px] mx-auto px-4">
//     <h1 className="text-3xl text-center md:text-left font-bold mb-4">Shop Grid Default</h1>
//     <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
//       <Link href="/">Home</Link>
//       <span>•</span>
//       <Link href="/pages">Pages</Link>
//       <span>•</span>
//       <span className="text-[#FB2E86]">shop Grid Default</span>
//     </div>
//   </div>
// </div>
// <h1 className="font-bold text-xlg text-center text-[#151875] mb-4 pt-10">
//                 Ecommerce Accessories & Fashion item</h1>
//               <h4 className="text-[#8A8FB9] lg:text-start text-center md-4">
//                 About 9,620 results (0.62 seconds)</h4>
//               <div className="text-lg mb-2">
//               <label htmlFor="pages" className="p-2 text-[#182378]">Per Page:</label>
//                 <input id="pages" type="number" name="pages" defaultValue={1} required
//                   className="border border-gray-300 lg:w-10 w-20 md:w-10 text-center p-1"/>
//                 </div>   

//     <section className="text-gray-600 body-font">
//       <div className='max-w-6xl mx-auto px-4 py-8'>

//         {product.map((product) => (
//           <div key={product._id} className='border rounded-lg shadow-md hover:shadow-lg transition duration-200'>
//             {product.productName}
//             {product.image && (
//               <img 
//               src={urlFor(product.image).url()}
//               alt="image"
//               width={200}
//               height={200}
//               className='w-full h-48 object-cover rounded-md'/>
//             )}
//             <h2 className='text-lg font-semibold mt-4'>{product.productName}</h2>
//             <p className='text-gray-500 mt-2'></p>
//              {product.price ? `$${product.price}` : "Price not available"}
//           </div>
         
//         )
//       )}
//       </div>
     
   
   
//   </section>
// </div>
//   )}

// export default shop
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../../types/products";
import { allProducts, four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";


const Shop = () => {
  const [product, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const fetchProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      position: 'top-right', 
      icon: 'success',
      title: `${product.name} added to cart`, 
      showConfirmButton: false,
      timer: 1000
    });
  }

  return (
    <div>
      <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center md:text-left font-bold mb-4">
            Shop Grid Default
          </h1>
          <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Shop Grid Default</span>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-lg text-center text-[#151875] mb-4 pt-10">
        Ecommerce Accessories & Fashion item
      </h1>
      <h4 className="text-[#8A8FB9] lg:text-start text-center md-4">
        About 9,620 results (0.62 seconds)
      </h4>
      <div className="text-lg mb-2">
        <label htmlFor="pages" className="p-2 text-[#182378]">Per Page:</label>
        <input id="pages" type="number" name="pages" defaultValue={1} required className="border border-gray-300 lg:w-10 w-20 md:w-10 text-center p-1" />
      </div>

      <section className="text-gray-600 body-font">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((product) => (
              <div key={product._id} className="border rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4">
                {/* <Link href={`/product/${product.slug.current}`}> */}
                {product.imageUrl && (
                  <Image 
                  src={urlFor(product.imageUrl).url()} 
                  alt={product.name || "Product Images"} 
                  width={200} 
                  height={200} 
                  className="relative w-[200px] h-[200px] items-center"
                />
                )}
                <h2 className="text-lg font-semibold mt-4">{product.name || "Unnamed Product"}</h2>
                <p className="text-gray-500 mt-2">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                hover:scale-110 transition-transform duration-300 ease-in-out" 
                onClick={(e) => handleAddToCart(e, product)}>Add To Cart

                </button>
                {/* </Link> */}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
