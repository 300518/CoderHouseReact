import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../asyncMock/data";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [listaProductos, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    obtenerProductos().then((data) => {
      if (categoryId) {
        const filteredProducts = data.filter(
          (prod) => prod.category === categoryId
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>Listado de productos</h2>
      <ItemList products={listaProductos} />
    </div>
  );
};

export default ItemListContainer;
