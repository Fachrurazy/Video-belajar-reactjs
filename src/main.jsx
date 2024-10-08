import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Loginpage from './pages/Login'
import Errorpage from './pages/404Page'
import Registerpage from './pages/Register'
import Berandapage from './pages/Beranda'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loginpage />,
    errorElement: <Errorpage />
  },
  {
    path: '/login',
    element: <Loginpage />,
    errorElement: <Errorpage />
  },
  {
    path: '/register',
    element: <Registerpage />,
    errorElement: <Errorpage />
  },
  {
    path: '/beranda',
    element: <Berandapage />,
    errorElement: <Errorpage />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <RouterProvider router={router} />
  </StrictMode>,
)
