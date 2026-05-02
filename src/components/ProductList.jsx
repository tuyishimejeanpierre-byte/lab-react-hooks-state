import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const Products = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({category, addToCart}) => {

    const filteredProducts = Products.filter(product =>
    category === 'all' || product.category === category
  )
  return (
    <div>

      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filteredProducts.map(product=> (
        <ProductCard 
        key={product.id} 
        product={product}
        addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductList
