import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { agregarItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    agregarItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img
          src={product.img}
          className="card-img-top"
          alt={product.name}
          style={{ height: "300px", objectFit: "contain" }}
        />

        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Categoría:</strong> {product.category}</p>

          {added ? (
            <Link to="/cart" className="btn btn-primary">
              Ir al carrito
            </Link>
          ) : (
            <ItemCount stock={product.stock} onAdd={handleAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
