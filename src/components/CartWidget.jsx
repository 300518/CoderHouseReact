const CartWigdet = () => {
  return (
    <div className="position-relative ms-3" style={{ cursor: "pointer" }}>
      <span style={{ fontSize: "1.5rem" }}>🛒</span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        4
      </span>
    </div>
  );
};

export default CartWigdet;
