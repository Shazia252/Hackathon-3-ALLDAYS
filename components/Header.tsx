// import React from 'react';
// import { MdOutlineEmail } from 'react-icons/md';
// import { FaPhoneVolume, FaChevronDown, FaRegHeart } from 'react-icons/fa';
// import { FiUser } from 'react-icons/fi';
// import { LuShoppingCart } from 'react-icons/lu';

// const Header = () => {
//   return (
//     <div className="2xl:w-[1920px] h-[44px] w-full bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
//       <div className="w-[1177px] 2xl:w-[1177px] flex flex-col lg:flex-row md:justify-between items-center">
//         {/* Left Section */}
//         <div className="w-[30%] lg:w-[380px] flex items-center justify-center lg:justify-start">
//           {/* Email Section */}
//           <div className="flex items-center gap-3 mr-10">
//             <span className="w-4 h-4 text-[#ffffff]">
//               <MdOutlineEmail />
//             </span>
//             <h1 className="font-sans font-semibold text-sm sm:text-[14px] leading-4">
//               shazia252@gmail.com
//             </h1>
//           </div>
//           {/* Phone Section */}
//           <div className="flex items-center gap-3">
//             <span className="w-4 h-4">
//               <FaPhoneVolume className="text-[#ffffff]" />
//             </span>
//             <h1 className="font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               (12345)67890
//             </h1>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-[30%] lg:w-[400px] flex flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4">
//           {/* Language Dropdown */}
//           <div className="flex items-center">
//             <h1 className="font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               English
//             </h1>
//             <FaChevronDown className="mx-1 w-[16px] h-[16px]" />
//           </div>

//           {/* Currency Dropdown */}
//           <div className="flex items-center">
//             <h1 className="font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               USD
//             </h1>
//             <FaChevronDown className="mx-1 w-[16px] h-[16px]" />
//           </div>

//           {/* Login */}
//           <div className="flex items-center">
//             <h1 className="font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               Login
//             </h1>
//             <FiUser className="mx-1 w-[16px] h-[16px]" />
//           </div>

//           {/* Wishlist */}
//           <div className="flex items-center">
//             <h1 className="font-sans font-semibold text-sm sm:text-[16px] leading-4">
//               Wishlist
//             </h1>
//             <FaRegHeart className="mx-1 w-[16px] h-[16px]" />
//           </div>

//           {/* Cart */}
//           <div>
//             <LuShoppingCart className="w-[24px] h-[24px]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';

interface HeaderProps {
  email?: string;
  phone?: string;
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  email = 'shazia252@gmail.com',
  phone = '(12345)67890',
  cartCount = 0,
}) => {
  return (
    <div className="w-full h-[44px] bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
      <div className="w-[1177px] flex flex-col lg:flex-row md:justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center justify-center lg:justify-start gap-6">
          {/* Email Section */}
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold">{email}</span>
          </div>
          {/* Phone Section */}
          <div className="flex items-center gap-2">
            <FaPhoneVolume className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold">{phone}</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center lg:justify-end gap-4">
          {/* Language Dropdown */}
          <button className="flex items-center text-sm font-semibold">
            English <FaChevronDown className="ml-1 w-4 h-4" />
          </button>

          {/* Currency Dropdown */}
          <button className="flex items-center text-sm font-semibold">
            USD <FaChevronDown className="ml-1 w-4 h-4" />
          </button>

          {/* Login */}
          <button className="flex items-center text-sm font-semibold">
            Login <FiUser className="ml-1 w-4 h-4" />
          </button>

          {/* Wishlist */}
          <button className="flex items-center text-sm font-semibold">
            Wishlist <FaRegHeart className="ml-1 w-4 h-4" />
          </button>

          {/* Cart */}
          <button className="relative">
            <LuShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;