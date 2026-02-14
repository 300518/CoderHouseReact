import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarItem = (item, quantity) => {
    const existingProduct = cart.find((prod) => prod.id === item.id);

    if (existingProduct) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const limpiaCarro = () => {
    setCart([]);
  };

  const cantidadTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const precioFinal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarItem,
        eliminarItem,
        limpiaCarro,
        cantidadTotal,
        precioFinal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
