import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct/SingleProduct";


const Home = () => {
   const products = useLoaderData();
   return (
      <div>
         <div className="container mx-auto">
            {/* products : {products.length} */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
               {
                  products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
               }
            </div>
         </div>
      </div>
   );
};

export default Home;