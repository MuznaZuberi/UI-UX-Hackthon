"use client";
import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";


interface Props {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

export default function ProductDetail({ params }) {
  const [quantity, setQuantity] = useState<number | null>(0);
  const query = `*[_type == "product" && slug.current == "${params.slug}"] {
    id,
    image,
    title,
    price,
    description
  }[0]`; // Fetch only one product

  const [product, setProduct] = useState<Props | null>(null);

  useEffect(() => {
    async function displayProduct() {
      try {
        const fetchedProduct = await client.fetch(query);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    displayProduct();
  }, [params.slug]);

  if (!product) {
    return <p>Loading or product not found...</p>;
  }


  const increment = () => setQuantity((prev) => (prev === null ? 1 : prev + 1));
  const decrement = () =>setQuantity((prev) => (prev && prev > 1 ? prev - 1 : null));

  return (
    <div>



     {/* SINGLE Product SECTION  Start */}
         <section className=" body-font overflow-hidden">
         <div className="container px-5 py-24 mx-auto">
         <div key = {product.id} className="lg:w-4/5 mx-auto flex flex-wrap">
         <img
          alt={product.title}
          className="lg:w-1/2 w-full lg:h-auto h-64  rounded"
          src={urlFor(product.image).url()}
          width = {600}
          height = {600}
         />
         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
         <h1 className="text-black font-bold font-sans text-3xl mb-1">
               {product.title}
         </h1>
         <h2 className="pt-3 text-sm font-sans text-gray-500 tracking-widest">
                     {product.price}    
         </h2>
         <div className="flex mb-4">
         <span className="flex items-center">
         <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-orange-400"
              viewBox="0 0 24 24"
         >
         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
         </svg>
         <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-orange-400"
              viewBox="0 0 24 24"
         >
         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
         </svg>
         <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-orange-400"
              viewBox="0 0 24 24"
          >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-orange-400"
              viewBox="0 0 24 24"
           >
           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
           </svg>
           <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-orange-400"
              viewBox="0 0 24 24"
            >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3 font-sans">5 Customer Review</span>
            </span>
            </div>
            <p className="leading-relaxed font-sans text-black ">
                {product.description}
            </p>
            <p className = "mt-4 text-gray-400 text-lg font-sans">Size</p>
            <div className = "flex gap-6 font-sans font-bold mt-2">
            <div className = "product_size px-3 py-2 rounded-xl">L</div>
            <div className = "px-4 py-2 bg-gray-100 rounded-xl">XL</div>
            <div className = "px-3 py-2 bg-gray-100 rounded-xl">XS</div>
            </div>
            <br/>
            <span className="mr-3 text-gray-400 font-sans">Color</span>
            <br/>
            <br/>
            <button className="bg-purple-500 rounded-full w-10 h-10 focus:outline-none pt-4" />
            <button className="bg-black ml-2 bg-gray-700 rounded-full w-10 h-10 focus:outline-none" />
            <button className="size_btn ml-3 bg-indigo-500 rounded-full w-10 h-10 focus:outline-none" />
            <div className="md:flex lg:flex ">
            <span className="title-font font-medium text-2xl">
            <div className = "mx-auto px-4 py-2 md:w-32 lg:w-32 xl:w-32 text-center w-40 border border-2 text-md rounded-xl mt-6">
            <button onClick = {decrement}>-</button>
              <span className="px-4 py-2 text-gray-800">
                  {quantity !== null ? quantity : ""}
                </span>
            <button onClick = {increment}>+</button>
            </div>
            </span>
            <button className="flex mx-auto text-black border-1 mt-6 border border-black py-3 px-12 w-48 font-bold font-sans focus:outline-none rounded-xl">
                         Add To Cart
            </button>
            </div>
            </div>
            </div>
            </div>
            </section>

           

            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <div className = "flex mx-auto font-serif gap-4">
            <h2 className="text-sm text-black font-bold font-sans tracking-widest mb-1">
             Description
            </h2>
            <h2 className="text-xs text-gray-400 tracking-widest font-sans mb-1">
                                                 Additinal Information 
            </h2>
            <h2 className="text-xs text-gray-400 tracking-widest font-serif mb-1">
                                                 Reviews [5]
            </h2>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-6 text-justify text-lg text-gray-400 font-sans">
               Embodying the raw wayward spirit of rock n roll the killburn portable active stero speaker takes the unmistakable look and sound of marshall unplugs the chords and takes the show on the road.
            <br/>
            <br/>
               Weighing in under 7 pounds the killburn is lightweight piece of vintage style engineering.Setting the bar as one of the loudest speakers in its class the killburn is a compact stout-hearted hero with a well balanced audio with boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.The analouge knobs allow you to fine tune the controls to your personal preferences while the guitar-influnced leather straps enables  easy and stylish travel. 
            </p>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-48 overflow-hidden">
            <Image
              alt="sofa_image"
              className=" h-full w-full object-cover object-center"
              src="/images/set_15.png"
              width = {600}
              height = {600}
            />
            </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-48 overflow-hidden">
            <Image
              alt="product_image"
              className="h-full w-full object-cover object-center"
              src="/images/product_set.png"
              width = {600}
              height = {600}
            />
            </div>
            </div>
            </div>


             <div className="container px-5 py-24 mx-auto mt-20">
            <div className="flex flex-col">
            <h1 className = "text-center font-bold font-sans text-4xl text-black">Related Products</h1>
            <p className = "text-center font-sans text-gray-400 text-xl mb-20 mt-3">Find a bright ideal to suit your taste with our great selection of suspension flooe and table lights</p>
            </div>
            <div className="flex flex-wrap">
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
            <div className="relative group rounded-lg h-64 overflow-hidden">
            <Image
              alt="product_image"
              className="w-full h-full"
              src= "/images/set_01.png"
              width = {600}
              height = {600}
            />
            <Link href = "/shops/product_01" className = "cart-btn absolute py-1 font-sans font-bold bottom-0 rounded-b-lg text-white opacity-0 group-hover:opacity-100 trasaction duration-300 w-full text-center">View Details</Link>
           </div>
           <h2 className="text-xl font-sans text-black mt-5">
                                  Treton modular sofa_03
           </h2>
           <p className="font-sans font-bold leading-relaxed mt-2 text-xl">
                                  RS 25,000.00
           </p>
           </div>
           <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
           <div className="relative group rounded-lg h-64 overflow-hidden">
           <Image
              alt="product_image"
              className="w-full h-full"
              src= "/images/set_02.png"
              width = {600}
              height = {600}
            />
            <Link href = "/shops/product_02"  className = "cart-btn absolute py-1 font-sans font-bold bottom-0 rounded-b-lg text-white opacity-0 group-hover:opacity-100 trasaction duration-300 w-full text-center">View Details
            </Link>
            </div>
            <h2 className="text-xl font-sans text-black mt-5">
                                Granite dining table with 
            <br/>
                                 dining chair
            </h2>
            <p className="font-sans font-bold leading-relaxed mt-2 text-xl">
                                              RS 25,000.00

            </p>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
            <div className="relative group rounded-lg h-64 overflow-hidden">
            <Image
              alt="product_image"
              className="w-full h-full"
              src= "/images/set_03.png"
              width = {600}
              height = {600}
            />
           <Link href = "/shops/product_03" className = "cart-btn absolute py-1 font-sans font-bold bottom-0 rounded-b-lg text-white opacity-0 group-hover:opacity-100 trasaction duration-300 w-full text-center">View Details
           </Link>
            </div>
            <h2 className="text-xl font-sans text-black mt-5">
                                  Outdoor bar table and stool
            </h2>
            <p className="font-sans font-bold leading-relaxed mt-2 text-xl">
                                  RS 25,000.00
            </p>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
            <div className="relative group rounded-lg h-64 overflow-hidden">
            <Image
              alt="product_image"
              className="w-full h-full"
              src= "/images/set_04.png"
              width = {600}
              height = {600}
            />
           <Link href = "/shops/product_04"  className = "cart-btn absolute py-1 font-sans font-bold bottom-0 rounded-b-lg text-white opacity-0 group-hover:opacity-100 trasaction duration-300 w-full text-center">View Details
           </Link>
            </div>
            <h2 className="text-xl font-sans text-black mt-5">
                               Plain console with teak mirror
            </h2>
            <p className="font-sans font-bold leading-relaxed mt-2 text-xl">
                               RS 25,000.00
            </p>
            </div>
            </div>
            <p className = "text-center font-bold font-serif text-xl mt-8"><Link href = "/shop"><u>View More</u></Link></p>
            </div>
            </div>
            {/* SINGLE Product SECTION End */}
</div>

  );
}
