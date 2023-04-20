import { Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Liked from './pages/Liked'
import ProductPage from './pages/ProductPage'

function App() {
  
  return (
    <>
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/liked' element={<Liked/>}/>
         </Route>
      </Routes>
    </>
  )
}

export default App
