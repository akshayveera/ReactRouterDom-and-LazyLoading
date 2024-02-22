
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Services from './components/Services'
import ProfilePage from './components/ProfilePage'
import ErrorElement from './components/ErrorElement'
import {lazy, Suspense} from "react";

function App() {

  // used for lazy loading
  const About = lazy(()=> import("./components/About"))  

  const routing = createBrowserRouter([
    {
      path : '/',
      element : <Main/>,
      errorElement : <ErrorElement/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/profiles',
          element : <Profile/>,
          children : [
            {
              path : '/profiles/:profileId',
              //  path : ':profileId', we can also provide it like this
              element : <ProfilePage/>
            }
          ]
        },
        {
          path : '/services',
          element : <Services/>
        },
        {
          path : '/about',
          element : (<Suspense fallback={<h1>lazy loading ...</h1>}>
            <About/>
          </Suspense>)
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routing}>
      <Main/>
    </RouterProvider>
  )
}

export default App
