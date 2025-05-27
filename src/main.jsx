import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";


function HomePage() {
    return null;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },

    // Login and Register routes outside of the BaseLayout
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element:  <Dashboard />
    },


    {
        path: '*',
        element: <Navigate to="/" replace />
    },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider  router={router}/>
  </StrictMode>,
)
