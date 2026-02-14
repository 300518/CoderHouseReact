import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, precioFinal } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">Carrito vacío</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h4>Total: ${precioFinal()}</h4>

      <button className="btn btn-danger mt-3" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
