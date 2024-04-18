import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';  
import Root from './components/Root';
import Home from './Pages/Home';
import News from './Pages/News';
import Error from './Error';
import CryptoDetails from './Pages/CryptoDetails';
import Cryptocurrencies from './Pages/Cryptocurrencies';
const router=createBrowserRouter([
  {
  path:'/',
  element:<Root/>,
  errorElement:<Error/>,
  children:[
    {path:'/',element:<Home/>},
    {path:'/cryptocurrencies',element:<Cryptocurrencies/>},
    {path:'/news',element:<News/>},
    {path:'/crypto/:coinId',element:<CryptoDetails/>},
  ],
  },
]);



const App = () => {
  return <RouterProvider router={router}/>
 
  
}

export default App