import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [listaProductos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "productos");
  
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;
  
    getDocs(q)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        setProducts(products);
      })
      .catch((error) => {
        console.log("Error al traer productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  
  }, [categoryId]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div>
      <h2>Listado de productos</h2>
      <ItemList products={listaProductos} />
    </div>
  );
};

export default ItemListContainer;
