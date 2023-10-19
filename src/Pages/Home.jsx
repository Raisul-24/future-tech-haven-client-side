
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";


const Home = () => {
   const [brands, setBrands] = useState([])
   useEffect(() => {
      fetch('brands.json')
         .then(res => res.json())
         .then(data => setBrands(data))
   }, []);

   // console.log(brands);



   return (

      <div>
         <div className="container mx-auto">
            <div className="flex items-center text-xl font-semibold mt-6">
               <h2 className="bg-red-600 text-white px-10 py-2 mr-10 rounded-xl">News:</h2>
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
                  brands.map(brand => <Link to={`/brands/${brand.brand_name}`} key={brand.id}
                     className="border-2 py-2 rounded-3xl bg-red-50 ">
                     <div className="flex justify-center items-center">
                        <img src={brand.img} alt="" className=" w-14 rounded-full mr-5 h-14" />
                        <h2 className="text-xl md:text-3xl font-bold">{brand.brand_name}</h2>
                     </div>
                  </Link>)
               }
            </div>

         </div>
      </div>
   );
};

export default Home;