
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Vlog from './Pages/Vlog'
import Social from './Pages/Social'
import About from './Pages/About'
import Layoutone from './Layout/Layoutone'
import Layouttwo from './Layout/Layouttwo'

function App() {
// ------ react router dom
 const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Layoutone/>}>
      <Route index element={<Home/>} />
      <Route path='/vlog' element={<Vlog/>} />      
    </Route>
    <Route path='/laytwo' element={<Layouttwo/>}>
      <Route index element={<Social/>} />
      <Route path='/laytwo/about' element={<About/>} />
    </Route>
    </Route>
  )
 )
  return (
    <>
    <RouterProvider router={myRoute} />
    </>
  )
}

export default App
