

import './App.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { router } from './router'

function App() {


  return (
    <>
     
      <div className='App'>
      <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
