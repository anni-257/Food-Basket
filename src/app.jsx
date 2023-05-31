import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../style.css";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantList from "./components/RestaurantList";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";




/**
 * 
 * !Header
 *  * Logo
 *  * NavItems
 *  * Cart
 * !Body
 *  * Search-Bar
 *  * RestrauntList
 *      ? RestaurantCard
 *          todo => Image
 *          todo => Name
 *          todo => Racing
 *          todo => Cuisine
 *          todo => Price
 * !Footer
 *  * Links
 *  * Copyright
 *  * Logo
 *   
 */

// ! Entry point for React 
const root=ReactDOM.createRoot(document.getElementById("root"));

const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantList/>
            }
        ]
    }
])

// ! Rendering

root.render(<RouterProvider router={appRouter} />)

