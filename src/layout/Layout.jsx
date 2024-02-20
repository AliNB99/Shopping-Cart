import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useCookie } from "../hooks/useCookie";
import { useEffect, useRef, useState } from "react";
import { deleteCookie } from "../helpers/helper";
import toast from "react-hot-toast";

function Layout({ children }) {
  const [seed, setSeed] = useState(1);

  const [state] = useCart();
  const cookie = useCookie();
  const logout = useRef(null);

  const showLogOutHandler = () => {
    logout.current.classList.toggle(styles.showLogout);
  };

  const logOutHandler = () => {
    deleteCookie();
    logout.current.classList.remove(styles.showLogout);
    toast.success("logout is successful");
  };

  useEffect(() => {
    setSeed(Math.random());
  }, [seed]);

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
              <Link onClick={showLogOutHandler}>
                <FaUserAlt fontSize={22} />
              </Link>
            ) : (
              <Link to="/login">
                <FiLogIn fontSize={25} />
              </Link>
            )}
          </div>
          <div ref={logout} className={styles.logout}>
            <p>Do you want to log out of your account?</p>
            <button onClick={logOutHandler}>LOG OUT</button>
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
