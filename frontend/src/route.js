import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/AdminDashboard";
import { Children } from "react";
import SellerList from "./pages/components/SellerList";
import CustomerList from "./pages/components/CustomerList";
import NewProductForm from "./pages/components/NewProductForm";
import ViewProducts from "./pages/components/ViewProducts";
import AddNewBrand from "./pages/components/AddNewBrand";
import ViewBrand from "./pages/components/ViewBrand";
import MainNav from "./pages/components/MainNav";
import CategoryBar from "./pages/components/CategoryBar";
import MainSlider from "./pages/components/MainSlider";
import ProductSection from "./pages/components/ProductSection";
import ProductDetailPage from "./pages/ProductDetailPage";

const router =createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<SignUp/>
    },
    {
    path:"/signin",
    element:<SignIn/>
    },
    {
      path:"/product/details/:id",
      element:<ProductDetailPage/>
    },
    {
      path:"/admin/dashboard",
      element:<AdminDashboard/>,
      children:[
        {
          path:"customers",
          element:<CustomerList/>
        },
        {
          path:"sellers",
          element:<SellerList/>
        },
        {
          path:"products/new",
          element:<NewProductForm/>
        },
        {
          path:"products",
          element:<ViewProducts/>

        },
        {
          path:"brands",
          element:<ViewBrand/>
        },
        {
          path:"brands/new",
          element:<AddNewBrand/>
        }
      ]
    }
])

export default router;