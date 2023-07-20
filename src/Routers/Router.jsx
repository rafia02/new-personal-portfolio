import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Home/About";
import Contact from "../Components/Home/Contact";
import Home from "../Components/Home/Home";
import Project from "../Components/Home/Project";
import Skills from "../Components/Home/Skills";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/", element: <Layout></Layout>, children: [
            { path: "/", element: <Home></Home> },
            {path: "/about", element: <About></About>},
            {path: "/skills", element: <Skills></Skills>},
            {path: "/project", element: <Project></Project>},
            {path: "/contact", element: <Contact></Contact>},
            
        ]
    }

])