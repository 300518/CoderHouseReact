import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, limpiaCarro, precioFinal } = useContext(CartContext);

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

      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-danger" onClick={limpiaCarro}>
          Vaciar carrito
        </button>

        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
