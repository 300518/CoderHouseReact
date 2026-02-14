import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { eliminarItem } = useContext(CartContext);

  return (
    <div className="border p-3 mb-3 rounded">
      <h5>{item.name}</h5>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unidad: ${item.price}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>

      <button
        className="btn btn-danger btn-sm mt-2"
        onClick={() => eliminarItem(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
