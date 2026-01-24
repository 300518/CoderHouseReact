import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>

        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
