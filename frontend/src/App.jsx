import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './pages/Shop'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portal from './pages/AdminPages/Portal'
import Footer from './components/Footer/Footer'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import men_banner from './components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './components/Assets/Frontend_Assets/banner_women.png';
import kid_banner from './components/Assets/Frontend_Assets/banner_kids.png'
import LoginForm from './pages/AdminPages/Login/LoginForm';
import RegisterFrom from './pages/AdminPages/Login/RegistrationForm'
import AddProduct from './components/Admin/AddProduct/AddProduct';
import ListProduct from './components/Admin/ListProduct/ListProduct';
import Home from './pages/AdminPages/Home/Home';
import NotFound from './pages/AdminPages/NotFound/NotFound'


function App() {
 

  return (
    <>
     <div>

     
     
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterFrom/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/portal' element={<Portal/>}>
        
             <Route path='addproduct' element={<AddProduct/>}/>
             <Route path='listproduct' element={<ListProduct/>}/>
          </Route>
        
      </Routes>
      <Footer/>
    
     </div>
    </>
  )
}

export default App
