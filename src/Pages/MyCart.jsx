import { useLoaderData } from "react-router-dom";
import SingleAddToCart from "../Components/SingleProduct/SingleAddToCart";


const MyCart = () => {
   const myCarts = useLoaderData();
   // console.log(myCarts)
   return (
      <div className="container mx-auto">
         {/* {myCarts.length} */}
         <div className="">
            {
               myCarts.map(cart => <SingleAddToCart key={cart._id} cart={cart}></SingleAddToCart>)
            }
         </div>
      </div>
   );
};

export default MyCart;