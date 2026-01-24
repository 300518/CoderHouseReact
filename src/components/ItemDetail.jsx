const ItemDetail = ({ product }) => {
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
          <p className="card-text">
            <strong>Precio:</strong> ${product.price}
          </p>
          <p className="card-text">
            <strong>Stock:</strong> {product.stock}
          </p>
          <p className="card-text">
            <strong>Categoría:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
