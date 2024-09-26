import { ProductsIndex } from "./ProductsIndex"
import { useState } from 'react'
import axios from 'axios'

export function ProductsPage() {
  const [products, setProducts] = useState([])

  const handleProductsIndex = () => {
    console.log('hey')
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }


  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products}/>
      <button onClick={handleProductsIndex}>button</button>
    </main>
  );
}