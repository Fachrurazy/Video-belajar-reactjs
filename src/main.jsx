import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Suspensefallback from './components/Suspensefallback/Suspensefallback'
import Skeletonlogin from './components/Skeleton/Login/login'
import Skeletonregister from './components/Skeleton/Register/register'
import Skeletonberanda from './components/Skeleton/Beranda/index'

export const Loginpage = lazy(() => import('./pages/Login'))
const Errorpage = lazy(() => import('./pages/404Page'))
const Registerpage = lazy(() => import('./pages/Register'))
const Berandapage = lazy(() => import('./pages/Beranda'))

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <Suspensefallback fallback={<Skeletonlogin/>}>
    <Loginpage />
  </Suspensefallback>,
    errorElement: <Errorpage />
  },
  {
    path: '/login',
    element:
      <Suspensefallback fallback={<Skeletonlogin/>}>
        <Loginpage />
      </Suspensefallback>,
    errorElement: <Errorpage />
  },
  {
    path: '/register',
    element: 
    <Suspensefallback fallback={<Skeletonregister/>}>
      <Registerpage />
    </Suspensefallback>,
    errorElement: <Errorpage />
  },
  {
    path: '/beranda',
    element: 
    <Suspensefallback fallback={<Skeletonberanda/>}>
      <Berandapage />
    </Suspensefallback>,
    errorElement: <Errorpage />
  },

])

createRoot(document.getElementById('root')).render(
  <Suspensefallback>  
    <RouterProvider router={router} />
  </Suspensefallback>,
)
