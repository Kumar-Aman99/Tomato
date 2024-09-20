import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Signup from './components/LandingPage/Signup/Signup.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'',
        element:<Signup />
      },{}
    ]
  }
])

createRoot(document.getElementById('root')).render(
   <RouterProvider>
       <RouterProvider router={router} />
   </RouterProvider>
)
