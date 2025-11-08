import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Cart from "./pages/Cart.jsx"
import AdminHome from "./pages/admin/AdminHome.jsx"
import loadProduct from "./loaders/products.js"
import ProductBoundary from "./error-boundaries/ProductBoundary.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct,
        errorElement: <ProductBoundary />
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "admin",
        element: <AdminHome />,
      },
    ],
  },
])

export default router
