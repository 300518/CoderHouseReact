import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [itemId]);

  if (error) {
    return <p className="text-center">Producto no encontrado</p>;
  }

  if (!product) {
    return <p className="text-center">Cargando producto...</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
