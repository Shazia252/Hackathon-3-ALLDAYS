import Link from "next/link";
import Image from "next/image";
import pnf from '/public/orderComp.png';
import Hero2 from "@/components/Hero2";



export default function OrderComplete() {
  return (
    <div>
      <Hero2 name='Order Complete' add1='Home . Page' add2=' . Order Complete'/>
      <div>
        <div className="flex justify-center items-center pt-32">
          <Image src={pnf} alt="pnf.png" className="h-72 w-[700px]"></Image>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-[#FF1788] text-white py-2 px-4 rounded-md mb-16 hover:cursor-pointer">
          <Link href="../">Continue Shopping</Link>
        </div>
      </div>
     
      {/* Brand Image */}
      <div className="flex justify-center p-16">
        <img src="/transp.png" alt="Brand" className="w-full max-w-[70rem] h-auto" />
      </div>
    </div>


  );
}