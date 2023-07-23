import './App.css';
import React, { Suspense } from 'react';
import SignUp from './authentication/SignUp.js';
import Login from './authentication/Login.js';
import Cities from './components/Cities.js';
import ErrPage from './components/ErrPage.js';
import Loader from './components/Loader.js'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Map from './components/Map.js'
import Weather from './components/Weather';
/* const Login = React.lazy(()=>import ('./authentication/Login.js'));
const SignUp = React.lazy(()=>import('./authentication/SignUp.js'));
const Cities = React.lazy(()=>import('./components/Cities.js'));
const ErrPage = React.lazy(()=>import('./components/ErrPage.js'));
const Loader = React.lazy(()=>import('./components/Loader.js'));
 */

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/map",
      element: <Map />
    },
    {
      path: "/city",
      element: <Cities />
    },
    {
      path: "/weather",
      element: <Weather />
    },
    {
      path: "/errpage",
      element: <ErrPage />
    },
    {
      path: "/loader",
      element: <Loader />
    }
  ]);

  return (
   
     <RouterProvider router={router} />
    
  );
}

export default App;
