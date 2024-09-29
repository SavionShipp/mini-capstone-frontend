import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew"
import { SignupPage } from "./SignupPage"
import { LoginPage } from "./LoginPage"
import { useState, useEffect } from 'react'
import axios from 'axios'

export function ProductsPage() {
  const [products, setProducts] = useState([])

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }

  // const handleProductsNew = (params, successCallback) => {
  //   axios.post("http://localhost:3000/product.json", params).then((response) => {
  //     setProducts([...products, response.data]);
  //     successCallback();
  //   });
  // }

  useEffect(handleProductsIndex, [])
  return (
    <main>
      {/* <SignupPage />
      <LoginPage /> */}
      <ProductsIndex products={products}/>
      {/* <ProductsNew onCreate={handleProductsNew}/> */}
    </main>
  );
}