
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Accordion from "../Components/Accordion";


const Home = () => {
   const [brands, setBrands] = useState([])
   useEffect(() => {
      fetch('https://future-tech-haven-server-side-5q29gaaev-raisuls-projects.vercel.app/brands')
         .then(res => res.json())
         .then(data => setBrands(data))
   }, []);

   // console.log(brands);



   return (

      <div className="container mx-auto">
         <div>
            <div className="flex items-center text-xl font-semibold mt-6">
               <h2 className="bg-red-600 text-white px-3 md:px-10 py-2 md:mr-10 rounded-xl">Latest</h2>
               <Marquee>
                  Up to 75% sell now with conditional free delivery. Hurry up to buy more......
               </Marquee>
            </div>
            <Banner></Banner>
            <div className="text-black text-center my-10">
               <h3 className="text-3xl font-extrabold">Popular Brands:</h3>
            </div>
            <div className="flex flex-col justify-center gap-9 my-10 ">
               {
                  brands.map(brand => <Link to={`/brands/${brand.brand_name}`} key={brand._id}
                     className="border-2 py-2 rounded-3xl bg-red-50 ">
                     <div className="flex justify-center items-center">
                        <img src={brand.img} alt="" className=" w-14 rounded-full mr-5 h-14" />
                        <h2 className="text-xl md:text-3xl font-bold">{brand.brand_name}</h2>
                     </div>
                  </Link>)
               }
            </div>

         </div>
         <div className="my-10 md:my-20 px-5 md:px-0">
            <h2 className="text-2xl text-center font-bold">Hot Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 my-6">
               <img src="https://i.ibb.co/z7HsbhY/iphone-13-pro-max-alpine-green-Price-in-Srilanka-Apple-Asia-5.jpg" className="w-60 md:w-72 h-72 rounded-xl" alt="" />
               <img src="https://i.ibb.co/N2yzFWT/Galaxy-S23-Cream-3448.jpg" className="w-60 md:w-72 h-72 rounded-xl" alt="" />
               <img src="https://i.ibb.co/FmtdYrn/Samsung-Galaxy-Book-Flex-2-01.jpg" className="w-60 md:w-72 h-72 rounded-xl" alt="" />
               <img src="https://i.ibb.co/t2RMk9Q/Pixel-7-Pro-Obsidian-8439.jpg" className="w-60 md:w-72 h-72 rounded-xl" alt="" />
            </div>
          </div>
         <Accordion></Accordion>
         
      </div>
   );
};

export default Home;