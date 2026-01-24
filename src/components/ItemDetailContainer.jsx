import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerItem } from "../asyncMock/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    obtenerItem(id)
      .then((res) => {
        if (!res) {
          setError(true);
        } else {
          setProduct(res);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return <p className="text-center">Producto no encontrado</p>;
  }

  if (!product) {
    return <p className="text-center">Cargando producto...</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
