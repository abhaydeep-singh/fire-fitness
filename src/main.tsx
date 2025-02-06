import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home, About, Legs, Back, Chest, Abs, Shoulders,Arms} from './pages';


  const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:(
            <Home/>
          )
        },
        {
          path:"/contact",
          element:(
            <About/>
          )
        },
        {
          path:"/abs",
          element:(
            <Abs/>
          )
        },
        {
          path:"/arms",
          element:(
            <Arms/>
          )
        },
        {
          path:"/chest",
          element:(
            <Chest/>
          )
        },
        {
          path:"/back",
          element:(
            <Back/>
          )
        },
        {
          path:"/shoulders",
          element:(
            <Shoulders/>
          )
        },
        {
          path:"/legs",
          element:(
            <Legs/>
          )
        },
      ]     
    }
    
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
