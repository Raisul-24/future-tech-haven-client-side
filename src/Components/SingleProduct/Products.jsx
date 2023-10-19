import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Swal from "sweetalert2";


const Products = () => {
   const products = useLoaderData();
   // console.log(products.length)
   const { brand_name } = useParams();
   // console.log(brand_name);
   const allSimilarProducts = products.filter(similarProduct => similarProduct.brand === brand_name);
   // console.log(allSimilarProducts.length)
   if(allSimilarProducts.length === 0){
      Swal.fire({
         title: 'No data found!! Please add product...',
         showClass: {
           popup: 'animate__animated animate__fadeInDown'
         },
         hideClass: {
           popup: 'animate__animated animate__fadeOutUp'
         }
       })
   }

   return (
      <div className="container mx-auto">
         <div className="my-10">
            <div className="carousel w-full">
               <div id="item1" className="carousel-item w-full">
                  <img src="https://i.ibb.co/3zShGX9/Samsung-Galaxy-S23-Ultra-trade-in-promo-featured.jpg" 
                  className="w-full rounded-xl h-[70vh]" />
               </div>
               <div id="item2" className="carousel-item w-full">
                  <img src="https://i.ibb.co/zGbvGNn/Feat.jpg" className="w-full rounded-xl h-[70vh]" />
               </div>
               <div id="item3" className="carousel-item w-full">
                  <img src="https://i.ibb.co/X545Zp3/maxresdefault.jpg" className="w-full rounded-xl h-[70vh]" />
               </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
               <a href="#item1" className="btn btn-xs">1</a>
               <a href="#item2" className="btn btn-xs">2</a>
               <a href="#item3" className="btn btn-xs">3</a>

            </div>
         </div>
         <h2 className="text-3xl font-bold text-center my-10">{brand_name}</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 md:mb-20">
            {
               allSimilarProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
         </div>

      </div>
   );
};

export default Products;