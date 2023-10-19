

// import { useLoaderData } from "react-router-dom";
// import SingleProduct from "../Components/SingleProduct/SingleProduct";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
   // const products = useLoaderData()
   const [brands, setBrands] = useState([])
   useEffect(() => {
      fetch('brands.json')
         .then(res => res.json())
         .then(data => setBrands(data))
   }, []);

   console.log(brands);
  


   return (

      <div>
         <div className="container mx-auto">
            <div className="text-black text-center my-10">
               <h3 className="text-3xl font-extrabold">Popular Brands:</h3>
            </div>
            <div className="flex flex-col justify-center gap-9 my-10">
               {
                  brands.map(brand => <NavLink to={`/brands/${brand.brand_name}`} key={brand.id}
                     className="btn btn-outline">{brand.brand_name}</NavLink
                     >)
               }
            </div>

         </div>
      </div>
   );
};

export default Home;