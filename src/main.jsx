import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Login from './components/Login/Login.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5000/service')
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
