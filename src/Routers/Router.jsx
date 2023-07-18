import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/", element: <Layout></Layout>, children: [
            { path: "/", element: <Home></Home> }
        ]
    }

])