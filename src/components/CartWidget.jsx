import { useContext } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  const quantity = cantidadTotal();

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="position-relative ms-3"
        style={{ cursor: "pointer", paddingRight: "1rem" }}
      >
        <PiShoppingCartSimpleDuotone fontSize={"1.5rem"} />

        {quantity > 0 && (
          <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
            {quantity}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
