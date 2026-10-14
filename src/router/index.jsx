import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "../components/Layout";
import fetchContact from "../api/Contact";


 const router =createBrowserRouter([
    { 
        path:'/', 
        element: <Layout/>,
        children:[
    {
        index:true,
        element:<HomePage/>
    },
    { 
        path:'about', 
        element:<AboutPage />
    },
    { 
        path:'contact', 
        element:<ContactPage />,
        loader: fetchContact
    }
        ],
    },
],
{
    basename: '/CC22-test-deploy'
}

);

export default router; 