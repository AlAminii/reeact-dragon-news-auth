import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './AuthProviders/AuthProvider';
import News from './News';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('/news.json')
       
      },
      {
        path:"/news/:id",
        element:<PrivateRoute><News></News></PrivateRoute>

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
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
