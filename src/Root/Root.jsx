import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer";
import ThemeContext from "../Components/Theme/ThemeContext";
import { useContext } from "react";

const Root = () => {
   const { theme } = useContext(ThemeContext);
   return (
      <div style={{
         backgroundColor: theme === "light" ? "white" : "black",
       }}>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;