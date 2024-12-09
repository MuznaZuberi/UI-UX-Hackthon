import Link from "next/link";


// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
// Import all images used in this component
import ShopCover from "/images/shop_slide.png"
import Shop_01 from "/images/set_01.png";
import Shop_02 from "/images/set_02.png";
import Shop_03 from "/images/set_03.png";
import Shop_04 from "/images/set_04.png";
import Shop_05 from "/images/set_05.png";
import Shop_06 from "/images/set_06.png";
import Shop_07 from "/images/set_07.png";
import Shop_08 from "/images/set_08.png";
import Shop_09 from "/images/set_09.png";
import Shop_10 from "/images/set_10.png";
import Shop_11 from "/images/set_11.png";
import Shop_12 from "/images/set_12.png";
import Shop_13 from "/images/sets_13.png";
import Shop_14 from "/images/set_14.png";
import Shop_15 from "/images/sets_15.png";
import Shop_16 from "/images/set_16.png";




// ============================
//  React Icons
// ============================
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";

export default function Shop() {
   return (
   	  <div> 
         {/* Header Section Start*/} 	  	
         <header>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
         <nav className=" text-md font-bold md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center mt-4 gap-4 md:gap-6 lg:gap-6 xl:gap-6 ">
         <Link href = "/" className="mr-5 text-black  font-serif">Home</Link>
         <Link href = "/shop" className="mr-5 text-black  font-serif">Shop</Link>
         <Link href = "/" className="mr-5 text-black  font-serif">About</Link>
         <Link href = "/contact" className="mr-5 text-black font-serif">Contact</Link>
         </nav>
          <GrContactInfo/>
         <IoSearch />
         <FaRegHeart/>
         <AiOutlineShoppingCart/>
         </div>
         </header>
         {/* Header Section End*/}   
         




      

        {/* Shop Sectiom Start */}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="shopcover_image"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src={ShopCover}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-serif mb-2">
                                          Shop
        </h2>
        <button className="mt-3 text-black font-bold font-serif inline-flex items-center px-12 py-2 rounded-2xl">
                                           <Link href = "/">Home</Link><IoIosArrowForward />Shop           
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>



       
       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_01}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  Treton modular sofa_03
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_02}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                 Granite dining table with 
        <br/>
                                 dining chair
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                 RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_03}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  Outdoor bar table and stool
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_04}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                               Plain console with teak mirror
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                               RS 25,000.00
        </p>
        </div>
        </div>
        </div>
        </section>




       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_05}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                Grain coffee table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 15,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_06}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                 Kent coffee table 
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                 RS 225,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_07}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  Round coffee table_color 2
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 251,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_08}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                               Reclaimed teak coffee table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                               RS 25,200.00
        </p>
        </div>
        </div>
        </div>
        </section>



       <section className="body-font">
       <div className="container px-5 py-20 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_09}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  Plain console_
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 258,200.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_10}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                 Reclaimed teak slideboard
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                 RS 20,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_11}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  SJP_0825
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 200,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_12}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                               Bellow chair and table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                               RS 100,000.00
        </p>
        </div>
        </div>
        </div>
        </section>



       <section>
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_13}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  Granite square side table
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 258,800.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_14}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                 Asgaard sofa 
        <br/>
                                 dining chair
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                 RS 250,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_15}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                                  Maya sofa three seater
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 115,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="product_image"
            className="w-full h-full"
            src= {Shop_16}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5  md:text-left lg:text-left xl:text-left text-center">
                               Outdoor sofa set
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                               RS 244,000.00
        </p>
        </div>
        </div>
        </div>
        </section>




       <div className = "flex justify-center gap-6">
          <div className = "shop_btn  px-4 py-4 rounded-lg font-bold font-serif">1</div>
          <div className = " px-4 py-4 rounded-lg font-bold font-serif">2</div>
          <div className = "px-4 py-4 rounded-lg font-bold font-serif">3</div>
          <div className = " px-4 py-4 rounded-lg font-bold font-serif">Next</div>

       </div>






   



      
         <section className = 'sec_02 my-20'>
         <div className = "py-24">
         <div className="flex flex-wrap">
         <div className="mx-auto  mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">Free Delivery</h1>
         <p className=" leading-relaxed font-serif text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                           For all orders over $50, consectetur
         <br/>
                           adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6 ">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">90 Days Return</h1>
         <p className=" leading-relaxed font-serif text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                            If goods have problems, consectetur
         <br/>
                            adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-serif font-bold">Secure Payment</h1>
         <p className=" leading-relaxed font-serif text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                             100% secure payment consectetur
         <br/>
                             adipim scing elit.
         </p>
         </div>
         </div>
         </div>
         </div>
         </section> 
      {/* Shop SECTION End*/}

   	</div>
  );
}