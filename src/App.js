import ItemListContainer from './pages/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import ItemDetailContainer from './pages/itemDetailContainer'
import CartProvider from './context/CartProvider'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './route/PrivateRoute'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders'
import AddProduct from './pages/Admin/AddProduct'
import { useEffect } from 'react'

function App() {

  return (

    <><ToastContainer theme='colored' /><CartProvider>
      <main id='rootApp' >
        <div id='theme'>
          <BrowserRouter>
            <NavBar />
            <main className='max-w-5xl mx-auto pt-[100px]'>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='category/:categoryId' element={<ItemListContainer />} />
                <Route path='item/:id' element={<ItemDetailContainer />} />
                <Route
                  path='orders' element={<PrivateRoute>
                    <MyOrders />
                  </PrivateRoute>} />
                <Route
                  path='checkout' element={(
                    <PrivateRoute>
                      <Checkout />
                    </PrivateRoute>)} />
                <Route path='cart' element={(<Cart />)} />
                <Route path='admin/add-product' element={<AddProduct />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </main>
    </CartProvider></>
  )
}

export default App