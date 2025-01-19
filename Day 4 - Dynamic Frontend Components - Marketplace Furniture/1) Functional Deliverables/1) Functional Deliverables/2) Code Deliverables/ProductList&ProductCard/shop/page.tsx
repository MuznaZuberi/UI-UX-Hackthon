import Image from "next/image";
import Link from "next/link";
// ============================
//  React Icons
// ============================
import { IoIosArrowForward } from "react-icons/io";

import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

export default async function Shop() {
  const Query = `*[_type == "product"] | order(id asc) {
    id,
    image,
    detail_btn,
    title,
    description,
    price,
    slug 
}`;

  const FetchData = await client.fetch(Query);
  console.log(FetchData);

  return (
  <div>
  <section>
        <div>
        <div>
        <div className="flex flex-wrap  py-32 px-10 relative mb-4">
        <Image
          alt="shopcover_image"
          className="block opacity-100 absolute inset-0 w-full h-full"
          src="/images/shop_slide.png"
          width = {600}
          height = {300}
        />
        
        <div className="text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-black font-bold font-sans  mb-2">
                                          Shop
        </h2>
        <button className="mt-3 text-black font-bold font-sans inline-flex items-center px-12 py-2 rounded-2xl">
                             <Link href = "/">Home</Link><IoIosArrowForward /><Link href = "/shop">Shop</Link>           
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>
    <section>
    <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      {FetchData && FetchData.map((product)=>(
    <div key = {product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mb-20">
    <a className="block relative h-64 rounded overflow-hidden">
    <img
            alt={product.title}
            className="w-full h-full "
            src={urlFor(product.image).url()}
    />
    </a>
    <button  className = "prodetail-btn text-white w-full py-2 rounded-xl font-bold font-sans"><Link href={`/shop/${product.detail_btn}`}>
        View Details
      </Link></button>
    <div className="mt-4">
    <h2 className="text-gray-900 text-center font-sans text-lg font-bold">
            {product.title}
    </h2>
    <p className="mt-1 font-sans text-center text-lg font-bold text-gray-400">{product.price}</p>
    </div>
    </div>
       ))}      
    </div>
    </div>
    </section>






       <div className = "flex justify-center gap-6">
          <div className = "pagination_btn px-4 py-4 rounded-lg font-bold font-sans"><Link href = "/shop/product_01">1</Link></div>
          <div className = "pagination_btn px-4 py-4 rounded-lg font-bold font-sans"><Link href = "/shop/product_02">2</Link></div>
          <div className = "pagination_btn px-4 py-4 rounded-lg font-bold font-sans"><Link href = "/shop/product_03">3</Link></div>
          <div className = "pagination_btn px-4 py-4 rounded-lg font-bold font-sans"><Link href = "/shop/product_04">Next</Link></div>

       </div>






   



      
         <section className = 'tricker my-20'>
         <div className = "py-24">
         <div className="flex flex-wrap">
         <div className="mx-auto  mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-sans font-bold">Free Delivery</h1>
         <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                           For all orders over $50, consectetur
         <br/>
                           adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6 ">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-sans font-bold">90 Days Return</h1>
         <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
                            If goods have problems, consectetur
         <br/>
                            adipim scing elit.
         </p>
         </div>
         </div>
         <div className="mx-auto lg:mb-0 mb-6">
         <div className="pl-4 h-full text-center">
         <h1 className = "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-3 text-left font-sans font-bold">Secure Payment</h1>
         <p className=" leading-relaxed font-sans text-justify text-gray-400 md:text-lg lg:text-lg text:md">
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
