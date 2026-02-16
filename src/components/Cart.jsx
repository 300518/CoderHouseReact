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

      <div className="card mt-4 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Total</h4>
          <h4 className="mb-0 text-success">${precioFinal()}</h4>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-between">
        <button className="btn btn-outline-danger" onClick={limpiaCarro}>
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
