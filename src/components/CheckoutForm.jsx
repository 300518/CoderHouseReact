import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const CheckoutForm = () => {
  const { cart, precioFinal, limpiaCarro } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  const [confirmEmail, setConfirmEmail] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

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
    setErrorMsg("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Permite solo números y un + al inicio
    const isValid = /^(\+)?\d*$/.test(value);

    if (isValid) {
      setBuyer({
        ...buyer,
        phone: value,
      });

      setErrorMsg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (buyer.email !== confirmEmail) {
      setErrorMsg("Los emails no coinciden");
      return;
    }

    setLoading(true);

    const order = {
      buyer,
      items: cart,
      total: precioFinal(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      setOrderId(docRef.id);
      limpiaCarro();
    } catch {
      setErrorMsg("Hubo un error al generar la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
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
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      <div className="mb-4">
        <h5>Resumen de compra</h5>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.quantity}
          </p>
        ))}
        <strong>Total: ${precioFinal()}</strong>
      </div>

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
          placeholder="Teléfono (ej: +56912345678)"
          value={buyer.phone}
          onChange={handlePhoneChange}
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

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Confirmar Email"
          value={confirmEmail}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
            setErrorMsg("");
          }}
          required
        />

        <h4>Total a pagar: ${precioFinal()}</h4>

        <button
          className="btn btn-success mt-3"
          type="submit"
          disabled={loading}
        >
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
