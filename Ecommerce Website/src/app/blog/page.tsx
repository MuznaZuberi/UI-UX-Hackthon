import Link from "next/link";
// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
// Import all images used in this component
import BlogCover from "/images/shop_slide.png";
import Blog02 from "/images/blog_02.png";
import Blog03 from "/images/blog_post_02.png"
import Blog04 from "/images/blog_post_03.png"




// ============================
//   React Icons
// ============================
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";

export default function Blog() {
	return (
    <div>
    	   {/* Header Section Start*/} 	  	
         <header>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-6 text-xl">
         <nav className=" text-md font-bold md:ml-auto mx-auto flex flex-wrap items-center text-base justify-center mt-4 gap-4 md:gap-6 lg:gap-6 xl:gap-6">
         <Link href = "/" className="mr-5 text-black  font-serif">Home</Link>
         <Link href = "/shop" className="mr-5 text-black  font-serif">Shop</Link>
         <a className="mr-5 text-black  font-serif">About</a>
         <Link href = "/contact" className="mr-5 text-black font-serif">Contact</Link>
         </nav>
         <GrContactInfo/>
         <IoSearch/>
         <FaRegHeart/>
         <AiOutlineShoppingCart/>
         </div>
         </header>
         {/* Header Section End*/}   
         




      

    
        {/* Blogs Section*/}
        <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="blog"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src={BlogCover}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-serif mb-2">
                                         Blog
        </h2>
        <button className="mt-3 text-black font-bold font-serif inline-flex items-center px-12 py-2 rounded-2xl">
                                         <Link href = "/">Home</Link><IoIosArrowForward />Blog          
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>


        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2  mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <Image
          alt="blogs_img"
          className="w-full"
          src={Blog02}
       />
        <div className = "flex gap-4 text-gray-400 font-bold mt-4 text-xs md:text-md lg:text-md xl:text-md">
        <div  className = "flex gap-2"><RiAdminFill/>Admin</div>
        <div className = "flex gap-2"><FaCalendar/>14 Oct 2022</div>
        <div className = "flex gap-2"><FaTags/>Wood</div>
        </div>
        <h1 className="font-serif mt-6 text-3xl mb-4 text-black font-bold">
                         Going all-in with millennial design
        </h1>
        <p className="mb-8 leading-relaxed font-serif text-justify text-gray-400 text-md">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
        </p>
        <button className = "font-serif text-black font-bold"><u>Read More</u></button>



        <Image
        alt="blogs_img"
        className="w-full mt-20 rounded-xl "
        src={Blog03}
        />
        <div className = "flex gap-4 text-gray-400 font-bold mt-4 text-xs md:text-md lg:text-md xl:text-md">
        <div  className = "flex gap-2"><RiAdminFill/>Admin</div>
        <div className = "flex gap-2"><FaCalendar/>14 Oct 2022</div>
        <div className = "flex gap-2"><FaTags/>Wood</div>
        </div>
     
        <h1 className="font-serif mt-6 text-3xl mb-4 text-black font-bold">
                        Exploring new ways of decorating
        </h1>
        <p className="mb-8 leading-relaxed text-justify font-serif text-gray-400 text-md">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
        </p>
        <button className = "font-serif text-black font-bold"><u>Read More</u></button>

        <Image
          alt="blogs_img"
          className="w-full mt-20 rounded-xl"
          src={Blog04}
       />
        <div className = "flex gap-4 text-gray-400 font-bold mt-4 text-xs md:text-md lg:text-md xl:text-md">
        <div  className = "flex gap-2"><RiAdminFill/>Admin</div>
        <div className = "flex gap-2"><FaCalendar/>14 Oct 2022</div>
        <div className = "flex gap-2"><FaTags/>Wood</div>
        </div>
        <h1 className="font-serif mt-6 text-3xl mb-4 text-black font-bold">
                    Handmade pieces took time to make
        </h1>
        <p className="mb-8 leading-relaxed text-justify font-serif text-gray-400 text-md">
         Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
         plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
         tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
         chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
         plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
         tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
         chambray.
        </p>
        <button className = "font-serif text-black font-bold"><u>Read More</u></button>
        </div>
        <div className="mx-auto flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
        <input type = "search" className = "px-6 py-2 border border-2 border-gray-400 rounded-xl"/>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
        <h2 className="ml-7 text-black font-bold font-serif text-lg mb-3">
                              Categorise
        </h2>

        <section className="text-gray-600 body-font">
        <div  className="container px-5 py-4 mx-auto">
        <div className="lg:w-2/2 w-full overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
        <tr>                      
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="px-4 py-3">Crafts</td>
            <td className="px-4 py-3"></td>
            <td className="px-4 py-3 ">2</td>
        </tr>
        <tr>
            <td className="px-4 py-3">Design</td>
            <td className="px-4 py-3"></td>
            <td className="px-4 py-3">
                         8
        </td>
        </tr>
        <tr>
        <td className="px-4 py-3">Homemade</td>
        <td className="px-4 py-3"></td>
        <td className="px-4 py-3">
                         7
        </td>
        </tr>
        <tr>
        <td className="px-4 py-3">
                      Interior
        </td>            
        <td className="px-4 py-3">
             
        </td>
        <td className="px-4 py-3">
                          1
        </td>
        </tr>

        <tr>
        <td className=" px-4 py-3">
                         Wood
        </td>
        <td className="px-4 py-3">
              
        </td>
        <td className="px-4 py-3">
                      6
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </section>
        </div>
        </div>
        </div>
        </div> 
        </section>







       <div className = "flex justify-center gap-6">
          <div className = "shop_btn  px-4 py-4 rounded-lg font-bold font-serif cursor-pointer">1</div>
          <div className = " px-4 py-4 rounded-lg font-bold font-serif cursor-pointer">2</div>
          <div className = "px-4 py-4 rounded-lg font-bold font-serif cursor-pointer">3</div>
          <div className = " px-4 py-4 rounded-lg font-bold font-serif cursor-pointer">Next</div>

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
         </div>


);
}