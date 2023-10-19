import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";


const Products = () => {
   const products = useLoaderData();
   // console.log(products.length)
   const { brand_name } = useParams();
   // console.log(brand_name);
   const allSimilarProducts = products.filter(similarProduct => similarProduct.brand === brand_name);
   console.log(allSimilarProducts)


   return (
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold text-center my-10">{brand_name}</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 ">
            {
               allSimilarProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
         </div>

      </div>
   );
};

export default Products;