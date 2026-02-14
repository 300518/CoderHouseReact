import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center gap-2 mb-2">
        <button className="btn btn-secondary" onClick={restar}>
          -
        </button>

        <span>{count}</span>

        <button className="btn btn-secondary" onClick={incrementar}>
          +
        </button>
      </div>

      <button
        className="btn btn-success"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;
