import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useCookie } from "../hooks/useCookie";

function Layout({ children }) {
  const [state] = useCart();
  const cookie = useCookie();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping Cart Project</Link>
        <div className={styles.headerBtn}>
          <Link to="/checkout">
            <div className={styles.shopBasketBtn}>
              <PiShoppingCartSimpleBold />
              {!!state.itemCounter && <span>{state.itemCounter}</span>}
            </div>
          </Link>
          <div className={styles.loginBtn}>
            {cookie ? (
              <Link>
                <FaUserAlt fontSize={22} />
              </Link>
            ) : (
              <Link to="/login">
                <FiLogIn fontSize={25} />
              </Link>
            )}
          </div>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Ali with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
