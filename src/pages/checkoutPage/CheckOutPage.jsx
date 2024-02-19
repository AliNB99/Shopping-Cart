import BasketCard from "../../components/checkoutPage/basketCard/BasketCard";
import BasketSidebar from "../../components/checkoutPage/basketSidebar/BasketSidebar";
import { useCart } from "../../context/CartContext";
import { useTitle } from "../../hooks/useTitle";

import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
  const [state, dispatch] = useCart();
  useTitle("check out page");
  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
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
