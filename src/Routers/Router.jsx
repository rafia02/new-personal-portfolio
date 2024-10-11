import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Home/About";
import Contact from "../Components/Home/Contact";
import Home from "../Components/Home/Home";
import Skills from "../Components/Home/Skills";
import Layout from "../Layout/Layout";
import { DaynamicProject } from "../Components/Home/DaynamicProject";
import ProjectPage from "../Components/ProjectPage/ProjectPage";
import Details from "../Components/ProjectPage/Details";

export const router = createBrowserRouter([
    {
        path: "/", element: <Layout></Layout>, children: [
            { path: "/", element: <Home></Home> },
            {path: "/about", element: <About></About>},
            {path: "/skills", element: <Skills></Skills>},
            {path: "/projects", element: <ProjectPage></ProjectPage>},
            {path: "/projects/:id", element: <Details></Details>},
            {path: "/project/:id", element: <DaynamicProject></DaynamicProject>},
            {path: "/contact", element: <Contact></Contact>},
            
        ]
    }

])