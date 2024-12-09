import Link from "next/link";

export default function Footer() {
   return (
   	  <div>   	  	
          <footer>
          <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <p className = "text-gray-400 py-32 font-serif">400 university Drive Suite 200 Coral,
          <br/>
                                  Gables
          <br/>
                                  FL 33134 USA
          </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-bold font-serif text-gray-400 tracking-widest text-sm mb-3">
                                  Links
          </h2>
          <br/>
          <br/>
          <nav className="list-none mb-10">
          <li>
          <Link href = "/" className="text-black font-bold font-serif">Home</Link>
          </li>
          <br/>
          <li>
          <Link href= "/shop" className="text-black font-bold font-serif">Shop</Link>
          </li>
          <br/>
          <li>
          <Link href = "/" className="text-black font-bold font-serif">About</Link>
          </li>
          <br/>
          <li>
          <Link href = "/contact" className="text-black font-bold font-serif">Contact</Link>
          </li>
          </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-bold font-serif text-gray-400 tracking-widest text-sm mb-3">
                                         Help
          </h2>
          <br/>
          <br/>
          <nav className="list-none mb-10">
          <li>
          <a className="text-black font-bold font-serif">Payment Options</a>
          </li>
          <br/>
          <li>
          <a className="text-black font-bold font-serif">Returns</a>
          </li>
          <br/>
          <li>
          <a className="text-black font-bold font-serif">Privacy Policies</a>
          </li>
          <br/>
          </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-bold font-serif text-gray-400 tracking-widest text-sm mb-3">
                                         Newsletter
          </h2>
          <br/>
          <br/>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div>
          <p>
          <input className = "w-90 underline" placeholder = "Enter Your Email Address"/>
          </p>
          </div>
          <button className="lg:mt-2 text-black xl:mt-0 font-bold font-serif flex-shrink-0 inline-flex border-0  px-0 focus:outline-none">
          <u>SUBSCRIBE</u>
          </button>
          </div>
          </div>
          </div>
          </div>
          <div className = "border border-2">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                                2022 Meubel House All rights reserved
          </p>
          </div>
          </div>
          </footer>
   	  </div>
   	);
}