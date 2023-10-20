
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
const SingleAddToCart = ({ cart }) => {
   const { _id, name, brand, price, short_description, photo} = cart;
   // console.log(cart)
   const handleDelete = _id => {
      console.log(_id)
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            
            fetch(`https://future-tech-haven-server-side-5q29gaaev-raisuls-projects.vercel.app/addToCarts/${_id}`,{
               method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if(data.deletedCount > 0){
                  Swal.fire(
                     'Deleted!',
                     'Your product has been deleted.',
                     'success'
                  )
               }
            })
         }
      })
   }
   return (
      <div className='flex justify-center my-10'>
         <div className="card card-side bg-white shadow-xl md:p-4 w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=''>
                  <img src={photo} alt="" className='h-36 md:h-60' />
            </div>
            <div className="card-body col-span-2">
               <h2 className="card-title">Name: {name}</h2>
               <h2 className="card-title">Brand: {brand}</h2>
               <p className='hidden md:flex'>{short_description}</p>
               <h2 className='text-xl font-bold'>Price: {price} $</h2>
               <div className="card-actions justify-center md:justify-end">
                  <button className="btn btn-error text-white"
                  onClick={() => handleDelete(_id)}
                  >Delete</button>
               </div>
            </div>
            
            </div>
         </div>
         
      </div>
   );
};
SingleAddToCart.propTypes = {
   cart: PropTypes.element.any
}
export default SingleAddToCart;