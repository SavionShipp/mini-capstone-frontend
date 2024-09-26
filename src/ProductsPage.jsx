import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew"
import { useState, useEffect } from 'react'
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

  const handleProductsNew = (params, successCallback) => {
    console.log('hey')
    axios.post("http://localhost:3000/product.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  }

  useEffect(handleProductsIndex, [])
  return (
    <main>
      <ProductsIndex products={products}/>
      <ProductsNew onCreate={handleProductsNew}/>
    </main>
  );
}