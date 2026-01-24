const products = [
  {
    id: "01",
    name: " Paquete de carta One Piece",
    description: "Paquete de cartas TGC One Piece con 5 Cartas por Paquete",
    stock: 30,
    price: 3000,
    category: "cartas-tgc",
    img: "https://m.media-amazon.com/images/I/81tOjW9cT5L._AC_SL1500_.jpg",
  },
  {
    id: "02",
    name: " Sobre de carta Pokemon",
    description: "Paquete de cartas TGC Pokemon con 5 Cartas por Paquete",
    stock: 41,
    price: 5000,
    category: "cartas-tgc",
    img: "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/1080x0/filters:quality(75)/prd-cl/product-medias/629c0487-af68-4c00-87d5-826aec56b643/MKAC8L74I3/MKAC8L74I3-1/1744662007259-MKAC8L74I3-1-3.jpg",
  },
  {
    id: "03",
    name: " Figura Luffy One Piece",
    description: 'Figura Monkey D. Luffy Gear 5 "One Piece"',
    stock: 2,
    price: 70000,
    category: "figuras-accion",
    img: "https://www.weplay.cl/pub/media/catalog/product/cache/3f1b140c3c9f36fbf6b01dffb521c246/4/5/4573102690463.jpg",
  },
  {
    id: "04",
    name: " Figura DBZ Goku",
    description: "Figura DOD Dragon Ball - Super Saiyan 3 Son Goku",
    stock: 3,
    price: 75000,
    category: "figuras-accion",
    img: "../src/assets/products/gokussj3.webp",
  },
];

let error = false;
export const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error intente mas tarde");
      } else {
        resolve(products);
      }
    }, 1000);
  });
};

export const obtenerItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error intente mas tarde");
      } else {
        let product = products.find((prod) => prod.id === id);
        resolve(product);
      }
    }, 1000);
  });
};
