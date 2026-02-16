import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutForm = () => {
  const { cart, precioFinal, limpiaCarro } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: precioFinal(),
      date: new Date(),
    };

    console.log("Orden generada:", order);

    // Simulamos ID
    const fakeId = Math.random().toString(36).substring(2, 10);

    setOrderId(fakeId);
    limpiaCarro();
  };

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">No hay productos en el carrito</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <h4>Total a pagar: ${precioFinal()}</h4>

        <button className="btn btn-success mt-3" type="submit">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
