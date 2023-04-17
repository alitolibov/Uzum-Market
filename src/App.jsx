import { Route, Routes } from 'react-router-dom'
import './index.css'
import LayoutMobile from './layout/LayoutMobile'

function App() {
  
  return (
    <>
      <Routes>
         <Route path='/' element={<LayoutMobile/>}>
            <Route path='/' element={''}/>
         </Route>
      </Routes>
    </>
  )
}

export default App
