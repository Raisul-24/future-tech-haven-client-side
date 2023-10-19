import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import MyCart from './Pages/MyCart';
import Login from './Pages/Login';
import Register from './Components/Register';
import ErrorPage from './Pages/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import Products from './Components/SingleProduct/Products';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateProduct from './Components/SingleProduct/UpdateProduct';
import DetailSProduct from './Components/SingleProduct/DetailSProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brands/:brand_name",
        element: <Products></Products>,
        loader: () => fetch(`http://localhost:50001/products`),
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:50001/products/${params.id}`)
      },
      {
        path: "/detailsProduct/:id",
        element: <DetailSProduct></DetailSProduct>,
        loader : ({params}) => fetch(`http://localhost:50001/products/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
