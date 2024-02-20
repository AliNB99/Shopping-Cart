// context
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
// components
import Layout from "./layout/Layout";
import Routers from "./routes/Routes";
// toast
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Toaster />
          <Routers />
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
