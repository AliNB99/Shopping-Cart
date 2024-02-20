import toast from "react-hot-toast";
import BasketCard from "../../components/checkoutPage/basketCard/BasketCard";
import BasketSidebar from "../../components/checkoutPage/basketSidebar/BasketSidebar";
import { useCart } from "../../context/CartContext";
import { useTitle } from "../../hooks/useTitle";

import styles from "./CheckOutPage.module.css";
import { useCookie } from "../../hooks/useCookie";

function CheckOutPage() {
  const [state, dispatch] = useCart();
  const cookie = useCookie();
  useTitle("check out page");

  const clickHandler = (type, payload) => {
    if (type === "CHECKOUT") {
      if (cookie) {
        toast.success("Your purchase was successful");
      } else {
        toast.error("Please log in to your account");
        return;
      }
    }

    dispatch({ type, payload });
  };

  if (!state.itemCounter) {
    return <h1>Empty</h1>;
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
