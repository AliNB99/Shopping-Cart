import { Navigate, Route, Routes } from "react-router-dom";

// components
import ProductsPage from "../pages/productsPage/ProductsPage";
import DetailsPage from "../pages/detailPage/DetailsPage";
import CheckOutPage from "../pages/checkoutPage/CheckOutPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PageNotFound from "../pages/404Page/404";

// cookie
import { useCookie } from "../hooks/useCookie";

function Routers() {
  const cookie = useCookie();
  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route
        path="/login"
        element={!cookie ? <LoginPage /> : <Navigate to="/products" replace />}
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routers;
