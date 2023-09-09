import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router'
import toast, { Toaster } from 'react-hot-toast';


function App({ children }) {


  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
