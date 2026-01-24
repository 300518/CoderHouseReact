import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      <h3>Productos</h3>
      <div className="d-flex flex-wrap">
        {products.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
