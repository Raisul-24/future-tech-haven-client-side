import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
   const handleAddProduct = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const brand = form.brand.value;
      const type = form.type.value;
      const price = form.price.value;
      const short_description = form.short_description.value;
      const rating = form.rating.value;
      const photo = form.photo.value;
      const details = form.details.value;
      const newProduct = {name,brand,type,price,short_description,rating,photo,details}
      console.log(newProduct);

      fetch('http://localhost:50001/products', {
               method: 'POST',
               headers: {
                  'Content-type': 'application/json'
               },
               body: JSON.stringify(newProduct)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.insertedId) {
                     Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your product has been added',
                        showConfirmButton: false,
                        timer: 1500
                     })
                     form.reset();
                  }
               })
         
   }
   return (
      <div className="bg-[url('/images/more/11.png')] ">
         <div className="container mx-auto">
            <button className="flex btn  items-center mb-10 bg-transparent border-0 font-rancho text-lg font-bold text-[#374151]">
               <BiArrowBack></BiArrowBack>
               <Link to="/">Back to Home</Link>
            </button>
            <div className="bg-[#F4F3F0] md:pt-20 rounded-xl py-8 my-10 md:mb-20">
               <h2 className="text-3xl font-extrabold text-center font-rancho text-[#374151]">Add New Product</h2>
               <p className="text-center my-5 mb-8">
               Step into the future with Future Tech Haven, where innovation meets convenience, and <br />
                technology becomes an integral part of your life. Discover the gadgets and gizmos that will <br />
                 shape your tomorrow, all in one place.</p>
               <form onSubmit={handleAddProduct}>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-4 px-4 md:px-40">
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Name</span>
                        </label>
                        <label className="input-group ">
                           <input type="text" placeholder="Enter product name..."
                           name="name"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Brand</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter brand name..."
                           name="brand"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Type</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter type of the product..."
                           name="type"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter price..."
                           name="price"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Short Description</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter product details..."
                           name="short_description"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     <div className="form-control md:w-full">
                        <label className="label">
                           <span className="label-text text-black font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                           <input type="text" placeholder="Enter product rating..."
                           name="rating"
                              className="input input-bordered w-full bg-white" />
                        </label>
                     </div>
                     
                  </div>
                  <div className="form-control md:w-full px-4 md:px-40 md:my-4 ">
                     <label className="label">
                        <span className="label-text text-black font-bold">Photo</span>
                     </label>
                     <label className="input-group">
                        <input type="text" placeholder="Enter Photo URL..."
                        name="photo"
                           className="input input-bordered w-full bg-white" />
                     </label>
                  </div>
                  <div className="form-control md:w-full px-4 md:px-40 md:my-4 ">
                     <label className="label">
                        <span className="label-text text-black font-bold">Description</span>
                     </label>
                     <label className="input-group">
                        <textarea type="text" placeholder="Enter full description..."
                        name="details"
                           className="input input-bordered w-full bg-white h-24" />
                     </label>
                  </div>
                  
                  <div className="form-control md:w-full px-4 md:px-40 md:my-7">
                     <label className="input-group text-white">
                        <input type="submit" value="Add Product"
                           className="input bg-slate-200 border-2 border-[#374151] rounded-xl w-full font-rancho text-2xl py-2 text-[#374151]" />
                     </label>
                  </div>

               </form>
               <p className=" flex justify-center  text-sm font-light leading-normal text-inherit antialiased">
                  Do you want to add new brand?
                  <Link
                     to="/brand"
                     className="ml-1 block  text-sm font-bold leading-normal text-pink-500 antialiased"
                  >
                     Register Brand
                  </Link>
               </p>
            </div>
           
         </div>
         </div>
   );
};

export default AddProduct;