import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import ProductDetail from './components/routes/ProductDetail'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Purchases from './components/routes/Purchases'
import Cart from './components/routes/Cart'
import Header from './components/shared/Header'
import Footer from './components/footer/Footer'

function App() {

  // const isLoading = useSelector(state => state.app.isLoading);

  return (
    <div className='app'>
      <div>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/purchases' element={<Purchases />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>



    </div>

  )
}

export default App
