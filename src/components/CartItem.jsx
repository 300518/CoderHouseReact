import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { eliminarItem } = useContext(CartContext);

  return (
    <div className="card mb-3 shadow-sm">
  <div className="card-body d-flex justify-content-between align-items-center">
    <div>
      <h5 className="mb-1">{item.name}</h5>
      <p className="mb-1">
        Cantidad: <strong>{item.quantity}</strong>
      </p>
      <p className="mb-0">
        Precio unitario: ${item.price}
      </p>
    </div>

    <div className="text-end">
      <h6>${item.price * item.quantity}</h6>
      <button
        className="btn btn-outline-danger btn-sm mt-2"
        onClick={() => eliminarItem(item.id)}
      >
        Eliminar
      </button>
    </div>
  </div>
</div>
  );
};

export default CartItem;
