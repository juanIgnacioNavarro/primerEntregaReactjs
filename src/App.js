import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "../src/components/NavBar/index"
import * as React from 'react';
import Home from './pages/home.jsx';
import Products from './pages/Products';
import ProductId from './pages/ProductId/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main className='pt-[100px]'>
          <Routes>
            <Route path='/'element={<Home/>} />
            {/* <Route path='/products'  element={<PageEvents />} /> */}
            <Route path='/products'  element={<Products/>} /> 
            <Route path='/products/:id'  element={<ProductId/>}  />   
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
