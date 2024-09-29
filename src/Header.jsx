import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/Signup"> Signup</Link> | 
        <Link to="/Login"> Login</Link> | 
        <Link to="/"> Home</Link> | 
        <Link to="/products/new"> New Product</Link> |
        <Link to="/products">All Products</Link>
      </nav>
    </header>
  )
}