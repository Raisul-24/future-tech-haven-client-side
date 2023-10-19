import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
   const {user} = useContext(AuthContext);
   console.log(user);

   if(user){
      return children;
   }
   return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;