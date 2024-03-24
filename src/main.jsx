import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/Applied/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import Login from './components/Page/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     {
      path: '/',
      element: <Home></Home>,
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path: '/applied',
      element: <AppliedJobs></AppliedJobs>,
      loader: () => fetch('/jobs.json')
     },

     {
       path: '/job/:id',
       element: <JobDetails></JobDetails>,
       loader: () => fetch('/jobs.json')
     }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
