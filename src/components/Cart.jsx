import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">Carrito vacío</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="border p-3 mb-3">
          <h5>{item.title}</h5>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unidad: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      <h4>Total: ${totalPrice()}</h4>

      <button className="btn btn-danger mt-3" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
