import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";

export default function Header() {
   return (
   	  <div>  	
         {/* Header Section Start */}  	
         <header>
         <div className="header-container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
         <nav className=" text-xl md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center mt-4 gap-4 md:gap-6 lg:gap-6 xl:gap-6 ">
         <Link href = "/" className="mr-5 text-black  font-serif cursor-pointer">Home</Link>
         <Link href = "/shop" className="mr-5 text-black  font-serif">Shop</Link>
         <Link href = "/" className="mr-5 text-black  font-serif">About</Link>
         <Link href = "/contact" className="mr-5 text-black font-serif">Contact</Link>
         </nav>
         <GrContactInfo/>
         <IoSearch/>
         <FaRegHeart/>
         <AiOutlineShoppingCart/>
         </div>
         </header>
         {/* Header Section End */}    
   	  </div>

   	);
}