import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
const CartWigdet = () => {
  return (
    <div className="position-relative ms-3" style={{ cursor: "pointer", paddingRight: "1rem" }}>
      <PiShoppingCartSimpleDuotone fontSize={'1.5rem'} />
      <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
        4
      </span>
    </div>
  );
};

export default CartWigdet;
