import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
// import Cart from './pages/Cart'
// import Home from './pages/Home'
// import Liked from './pages/Liked'
// import ProductPage from './pages/ProductPage'

const Cart = lazy(() => import('./pages/Cart'))
const Home = lazy(() => import('./pages/Home'))
const Liked = lazy(() => import('./pages/Liked'))
const ProductPage = lazy(() => import('./pages/ProductPage'))


function App() {
  
  return (
    <>
      <Suspense>
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/liked' element={<Liked/>}/>
            <Route path='/cart' element={<Cart/>}/>
         </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
