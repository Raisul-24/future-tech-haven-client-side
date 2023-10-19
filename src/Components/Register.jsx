import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
   const { createUser } = useContext(AuthContext);
   const [registerError, setRegisterError] = useState('');

   const handleRegister = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const address = form.address.value;
      const email = form.email.value;
      const password = form.password.value;
      const newUser = { name, photo, address, email, password }
      console.log(newUser)
      // reset
      setRegisterError('')
      if (password.length < 6) {
         return setRegisterError('Password should be at least 6 character');
      }
      else if(!/^(?=.*[A-Z])/.test(password)){
         return setRegisterError('Password should be at least 1 Capital Letter');
      }
      else if(!/(?=.*[@$!%*#?&])/.test(password)){
         return setRegisterError('Password should be at least 1 special character(@$!%*#?&)');
      }

      createUser(email, password)
         .then(result => {
            console.log(result.user)
            // user
            const user = { name, photo, address, email }
            fetch('https://future-tech-haven-server-side-ftmzd8f4h-raisuls-projects.vercel.app/user', {
               method: 'POST',
               headers: {
                  'Content-type': 'application/json'
               },
               body: JSON.stringify(user)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.insertedId) {
                     Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your account has been registered',
                        showConfirmButton: false,
                        timer: 1500
                     })
                     form.reset();
                  }
               })
         })
         .catch(error => {
            console.error(error);
            setRegisterError(error.message);
         })
   }
   return (
      <div>
         <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-5 md:mt-10 pb-10">
            <form onSubmit={handleRegister}>
               <div className="form-control">
                  <div className="text-black text-center mb-8">
                     <h2 className="text-3xl font-bold border-b-2 pb-5">Register your account</h2>
                  </div>
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Your Name</span>
                  </label>
                  <input type="text"
                     name="name"
                     placeholder="Enter your name..."
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Photo URL</span>
                  </label>
                  <input type="text"
                     name="photo"
                     placeholder="Enter your photo URL..."
                     className="input input-bordered bg-[#F3F3F3] py-4" />
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Address</span>
                  </label>
                  <input type="text"
                     name="address"
                     placeholder="Enter your address..."
                     className="input input-bordered bg-[#F3F3F3] py-4" />

                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Email</span>
                  </label>
                  <input type="email"
                     name="email"
                     placeholder="Enter your email address..."
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Password</span>
                  </label>
                  <input type="password"
                     name="password"
                     placeholder="Enter your password..."
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
               </div>
               <div className="form-control mt-6">
                  <input type="submit" value="Register" className="btn text-white bg-black" />
               </div>
               <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                  Do you have an account?
                  <Link
                     to="/login"
                     className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                  >
                     Login
                  </Link>
               </p>
            </form>
            {
               registerError && <p className="text-center text-red-600">{registerError}</p>
            }
         </div>
      </div>
   );
};

export default Register;