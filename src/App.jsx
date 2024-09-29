import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsNewPage } from "./ProductsNewPage";
import axios from 'axios'
function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <ProductsPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/products/new",
          element: <ProductsNewPage />
        },
        {
          path: "/products",
          element: <ProductsIndexPage />,
          loader: () => axios.get("http://localhost:3000/products.json").then(response=> response.data)
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;

