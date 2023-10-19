import Swal from "sweetalert2";


const NewBrand = () => {
   const handleBrandName = e =>{
      e.preventDefault();
      const form = e.target;
      const brand_name = form.brand_name.value;
      const img = form.img.value;
      const newBrand = {brand_name,img}
      console.log(newBrand);
      // send data to server
      fetch('https://future-tech-haven-server-side-ftmzd8f4h-raisuls-projects.vercel.app/brands',{
         method: 'POST',
         headers: {
            'Content-type' : "application/json"
         },
         body: JSON.stringify(newBrand)
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
         if(data.insertedId){
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Your Brand has been added',
               showConfirmButton: false,
               timer: 1500
             })
             form.reset();      
         }        
      })
   }
   return (
      <div>
         <div className=" bg-[#F4F3F0] md:pt-20 rounded-xl py-8 my-10 md:mb-20">
            <h2 className="text-3xl font-extrabold text-center font-rancho text-[#374151]">Add New Brand</h2>
            <form onSubmit={handleBrandName}>
               <div className="form-control md:w-full px-4 md:px-40 md:my-4 ">
                  <label className="label">
                     <span className="label-text text-black font-bold">Brand Name</span>
                  </label>
                  <label className="input-group">
                     <input type="text" placeholder="Enter Brand Name..."
                        name="brand_name"
                        className="input input-bordered w-full bg-white" />
                  </label>
               </div>
               <div className="form-control md:w-full px-4 md:px-40 md:mb-10 ">
                  <label className="label">
                     <span className="label-text text-black font-bold">Brand Image</span>
                  </label>
                  <label className="input-group">
                     <input type="text" placeholder="Enter Brand Image URL..."
                        name="img"
                        className="input input-bordered w-full bg-white" />
                  </label>
               </div>
               <div className="form-control md:w-full px-4 md:px-40 md:my-7 ">
                  <label className="input-group ">
                     <input type="submit" value="Add New Brand"
                        className="input bg-[#D2B48C] border-2 border-[#374151] rounded-xl w-full font-rancho text-2xl py-2 text-[#374151]" />
                  </label>
               </div>
            </form>
         </div>
      </div>
   );
};

export default NewBrand;