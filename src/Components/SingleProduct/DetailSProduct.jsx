import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DetailSProduct = () => {
   const product = useLoaderData();
   console.log(product)
   const {  name,type, brand, price, short_description, rating, photo, details } = product;

   const handleAddToCart = e =>{
      e.preventDefault();
      const addedProduct = {name,brand,type,price,short_description,rating,photo,details}
      console.log(addedProduct);
// send data
      fetch('http://localhost:50001/addToCarts', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(addedProduct)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `Your Device has been added`,
                  showConfirmButton: false,
                  timer: 1500
               })
            }
         })
   }

   return (
      <div className="container mx-auto">
         <div className="text-center text-black">
            <h2 className="text-6xl font-extrabold my-5">{name}</h2>
            <h3 className="text-4xl font-extrabold btn btn-outline btn-success">Price : {price}</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="flex justify-center">
               <img src={photo} alt="" className="w-[40vw] h-[80vh]" />
            </div>
            <div className="text-black ">
               <h2 className="text-2xl font-bold">Name: {name}</h2>
               <h2 className="text-2xl font-semibold">({type})</h2>
               <h2 className="text-2xl font-bold my-2">Brand: {brand}</h2>
               <h2 className="text-2xl font-extrabold">Price: {price}</h2>
               <p className="text-xl font-normal w-96 my-2">Short Description: <br />{short_description}</p>
               <h2 className="text-2xl font-semibold">Rating: {rating}</h2>
               <button onClick={handleAddToCart}
                className="btn btn-outline btn-success text-xl my-5 font-extrabold ">
                  Add to Cart</button>
            </div>
         </div>
         <div className="my-10">
            <h2 className="text-2xl font-bold">Full Specification:</h2>
            <p className="text-lg font-medium">{details}</p>
         </div>
      </div>
   );
};

export default DetailSProduct;