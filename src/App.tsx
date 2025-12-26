import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/home";
import Cart from "./pages/cart";
import DetailProduct from "./pages/detailProduct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: `/product/:id`,
        element: <DetailProduct />,
      },
    ],
  },
]);

export { router };
