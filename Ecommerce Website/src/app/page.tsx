import Header from "./header/page";
import Link from  "next/link";
// ============================
//   IMAGE IMPORTS SECTION
// ============================
// Import Image component for optimized image rendering
import Image from "next/image";
// Import all images used in this component
import RocketSeat from "/images/single_sofa.png";
import SquareTable from "/images/square_table.png";
import SeaterSofa from "/images/3seater_sofa.png";
import Shop_01 from "/images/set_01.png";
import Shop_02 from "/images/set_02.png";
import Shop_03 from "/images/set_03.png";
import Shop_04 from "/images/set_04.png";
import AsgaardSofa from "/images/asgaard_sofa.png";
import BlogPost_01 from "/images/blog_01.png";
import BlogPost_02 from "/images/blog_02.png";
import BlogPost_03 from "/images/blog_03.png";
import InstaPost from "/images/our_insta.png";



// ============================
//   React Icons
// ============================
import { FaRegClock } from "react-icons/fa";
import { PiCalendarBlankBold } from "react-icons/pi"

export default function Home() {
  return (
    <div>
    
      <Header/>

      {/* Section_01 Start */}
      {/*Hero section showcasing the "Rocket Single Seat"*/}
      <div className="about-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pl-40 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="font-bold font-serif text-4xl lg:text-7xl md:text-7xl xl:text-7xl mb-4  text-black">
                                      Rocket single
      <br/>
                                      seat
      </h1>
      <br className="hidden lg:inline-block" />
      <h2 className = "font-bold font-serif text-xl text-black"> <Link href = "/shop"><u>Shop Now</u></Link></h2>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5 mb-10 md:mb-0">
      <Image
        className="rounded"
        alt="single_sofa_image"
        src={RocketSeat}
      />
      </div>
      </div>
      {/* Section_01 End */}





       {/* Section_02 Start */}
       <section className = "sec_02">
       <div className="container px-5 py-10 mx-auto">
       <div className="flex flex-wrap">
       <div className="sm:w-1/2 mb-10 px-4 text-center">
       <div className="rounded-lg  overflow-hidden">
          <Image 
            alt="square_table_image"
            className="object-cover object-center h-full w-full"
            src={SquareTable}
       />
       </div>
       <h2 className="title-font text-2xl font-bold font-serif text-black mt-6 mb-3">
                                Side Table
       </h2>
        
       <button className="flex mx-auto mt-6 text-black font-bold font-serif border-0 py-2 px-5 focus:outline-none rounded">
       <Link href = "/shop"><u>View More</u></Link>
       </button>
       </div>
       <div className="sm:w-1/2 mb-10 px-4 text-center">
       <div className="rounded-lg  overflow-hidden">
       <Image 
            alt="3seater_sofa_image"
            className="object-cover object-center h-full w-full"
            src={SeaterSofa}
       />
       </div>
       <h2 className="pt-6 title-font text-2xl font-bold font-serif text-black mt-6 mb-3">
                                 Side Table
       </h2>
       <button className="flex mx-auto mt-6 text-black font-bold font-serif border-0 py-2 px-5 focus:outline-none rounded">
       <Link href = "/shop"><u>View More</u></Link>
       </button>
       </div>
       </div>
       </div>
       </section>
       {/* Section_02 End */}



       {/* Section_03 Start */}
       <section className="body-font">
       <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-col">
       <h1 className = "text-center font-bold font-serif text-4xl text-black">Top Picks For You</h1>
       <p className = "text-center font-serif text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection of suspension, flooe and table lights</p>
       </div>
       <div className="flex flex-wrap">
       <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
       <div className=" rounded-lg h-64 overflow-hidden">
       <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {Shop_01}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                                  Treton modular sofa_03
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {Shop_02}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
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
            alt="sofa set_image"
            className="w-full h-ful"
            src= {Shop_03}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                                  Outdoor bar table and stool
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                                  RS 25,000.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className=" rounded-lg h-64 overflow-hidden">
        <Image
            alt="sofa set_image"
            className="w-full h-ful"
            src= {Shop_04}
        />
        </div>
        <h2 className="text-xl font-serif text-black mt-5 md:text-left  lg:text-left xl:text-left text-center">
                               Plain console with teak mirror
        </h2>
        <p className="font-serif font-bold leading-relaxed mt-2 text-xl md:text-left lg:text-left xl:text-left  text-center">
                               RS 25,000.00
        </p>
        </div>
        </div>
        <p className = "text-center font-bold font-serif text-xl mt-8"><u><Link href = "/shop">View More</Link></u></p>
        </div>
        </section>
        {/* Section_03 End */}



        {/* Section_04 Start */}
        <section className="sec_04 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className = "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
            className="rounded"
            alt="Asgaard sofa_image"
            src={AsgaardSofa }
        />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  items-center">
        <h1 className="text-center font-serif text-xl mb-4 text-black">
                                        New Arrivals
        </h1>  
        <h2 className="font-bold font-serif text-4xl md:text-4xl lg:text-6xl xl:text-6xl">
                                        Asgaard sofa
        </h2>
        <div className="flex justify-center">
        <Link href = "/single_product" className="inline-flex text-black font-serif mt-10  border border-2 border-black py-2 px-14 focus:outline-none  rounded text-lg">
                                        Order Now
        </Link>
        </div>
        </div>
        </div>
        </section>
        {/* Section_04 End */}


        {/* Section_05 Start */} 
        <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
        <h1 className = "text-center font-bold font-serif text-4xl text-black">Our Blogs</h1>
        <p className = "text-center font-serif text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection.</p>
        <div className="flex flex-col">
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src={BlogPost_01}
         />
        </div>
        <h2 className="text-center text-xl font-serif text-black mt-5">
                                 Going all-in with millennial design 
        <button className="flex mx-auto text-center text-black font-bold font-serif mt-3">
        <u>Read More</u>  
        </button>
        <div className = "flex mt-6 text-xl gap-2">
        <p className = "mx-auto flex text-sm font-bold mr-3"><FaRegClock/>5min 
        </p>
        <p className = "mx-auto flex text-sm font-bold"><PiCalendarBlankBold/>12th 0ct 2022
        </p>
        </div>
        </h2>
        </div>
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg  overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src={BlogPost_02}
        />
        </div>
        <h2 className="text-center text-xl font-serif text-black mt-5">
                           Going all-in with millennial design 
        <button className="flex mx-auto text-center text-black font-bold font-serif mt-3">
        <u>Read More</u>  
        </button>
        <div className = "flex mt-6 text-xl gap-2">
        <p className = "mx-auto flex text-sm font-bold mr-3"><FaRegClock/>5min 
        </p>
        <p className = "mx-auto flex text-sm font-bold"><PiCalendarBlankBold />12th 0ct 2022
        </p>
        </div>
        </h2>
        </div>
        <div className="p-4 md:w-1/3  sm:mb-0 mb-6 mx-auto mt-6">
        <div className="rounded-lg overflow-hidden">
        <Image
            alt="blog_image"
            className="h-full w-full"
            src={BlogPost_03}
         />
         </div>
         <h2 className="text-center text-xl font-serif text-black mt-5">
                                   Going all-in with millennial design 
         <button className="flex mx-auto text-center text-black font-bold font-serif mt-3">
         <u>Read More</u> 
         </button> 
         <div className = "flex mt-6 text-xl gap-2">
         <p className = "mx-auto flex text-sm font-bold mr-3"><FaRegClock/>5min 
         </p>
         <p className = "mx-auto flex text-sm font-bold"><PiCalendarBlankBold />12th 0ct 2022
         </p>
         </div>
         </h2>
         </div>
         </div>
         <button className = "flex mx-auto font-bold font-serif text-xl mx-auto mt-12"><u><Link href = "/blog">View All Post</Link></u></button>
         </div>
        </section>
        {/* Section_05 End */}


    
        {/* Our Insta*/}
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="instaPost"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src={InstaPost}
        />
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-serif mb-2">
                                          Our Instagram
        </h2>
        <p className="leading-relaxed font-serif font-bold">
                                          Follow our store on instagram.
        </p>
        <button className="mt-3 text-black bg-white font-bold font-serif inline-flex items-center px-12 py-2 rounded-2xl">
                                          Follow Us           
        </button>
        </div>
        </div>
        </div>
        </div>

    </div>
  );
}
