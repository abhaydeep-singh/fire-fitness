import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <ThemeProvider>
     <div className="body lg:w-[90%] mx-auto">
     <Outlet/> 
     <Footer/>
     </div>
     </ThemeProvider>
    </>
  )
}

export default App
