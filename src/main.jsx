import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Main from "./components/Main.jsx";
import AllProducts from "./PAGES/AllProducts.jsx";
import ProductPage from "./PAGES/ProductPage.jsx"
import CartPage from "./PAGES/CartPage.jsx"
import { Provider } from "react-redux";
import store from "./REDUX/Store/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/productPage/:id",
        element: <ProductPage />,
      },
      {
        path: "/cartPage",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
