import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/Signup"> Signup</Link> | 
        <Link to="/Login"> Login</Link> | 
        <Link to="/"> Home</Link> | 
        <Link to="/New"> Create Product</Link>
      </nav>
    </header>
  )
}