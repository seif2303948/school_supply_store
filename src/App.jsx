import { useState  } from 'react'
import { HomePage } from './pages/HomePage'
import { Route , Routes} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Shop } from './pages/Shop'
import { MyCart } from './pages/MyCart'
import { YourOrder } from './pages/YourOrder'
import products from "./data/products";
import './App.css'

function App() {
  let [text , setText] =useState('');
  let filteredProducts = products.filter((product) =>
    product.keywords.some((keyword)=>{
      return keyword.toLowerCase().includes(text.toLowerCase());
    })
  )
  
  return (
    <>
      <NavBar setText={setText}/>
      <Routes>
        <Route element={<HomePage/>} path='/'></Route>
        <Route element={<Shop filteredProducts ={filteredProducts}/>} path='/Shop'></Route>
        <Route element={<MyCart/>} path='/MyCart'></Route>
        <Route element={<YourOrder/>} path='/YourOrder'></Route>
      </Routes>
    </>
  )
}

export default App
