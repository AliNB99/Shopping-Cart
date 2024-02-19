import { Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/productsPage/ProductsPage";
import DetailsPage from "./pages/detailPage/DetailsPage";
import CheckOutPage from "./pages/checkoutPage/CheckOutPage";
import PageNotFound from "./pages/404Page/404";
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";
import LoginPage from "./pages/loginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import { useCookie } from "./hooks/useCookie";

function App() {
  const cookie = useCookie();
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Toaster />
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route
              path="/login"
              element={
                !cookie ? <LoginPage /> : <Navigate to="/products" replace />
              }
            />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
