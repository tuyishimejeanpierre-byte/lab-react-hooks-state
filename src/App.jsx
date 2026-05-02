import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {

  const [cart, setCart] = useState([ ])
  const [darkMode, setDarkMode] = useState(false)

const toggleDarkMode = () => {
  setDarkMode(prev => !prev)
}
  const addToCart = (product)=> {
     setCart(prevCart => [...prevCart, product])
  }
  const [category, setCategory] = useState('all')
  const handleCategoryChange = (e) => {
  setCategory(e.target.value)
}
  // TODO: Implement state for dark mode toggle

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering

  return (
    <div className= {darkMode? 'app dark' : 'app'} >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
<DarkModeToggle 
        toggle={toggleDarkMode} 
        darkMode={darkMode} 
      />
      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
       category={category} 
      addToCart={addToCart}/>
 <Cart cart={cart} />
      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
