# Anime Store Chile

E-commerce desarrollado con React y Firebase como proyecto final del
curso.

La aplicación permite navegar por categorías, visualizar el detalle de
productos, agregarlos al carrito y generar una orden de compra.

------------------------------------------------------------------------

## Funcionalidades

-   Navegación SPA con React Router (sin recarga de página)
-   Rutas dinámicas por categoría y detalle de producto
-   Consumo de datos desde Firebase Firestore
-   Carrito global implementado con Context API
-   Generación de orden de compra con ID
-   Loader mientras se cargan los datos
-   Manejo de error para productos inexistentes
-   Limpieza automática del carrito después de la compra

------------------------------------------------------------------------

## Tecnologías utilizadas

-   React
-   Vite
-   React Router DOM
-   Firebase / Firestore
-   Bootstrap 5
-   React Icons

------------------------------------------------------------------------

## Instalación y ejecución

1.  Clonar el repositorio:

``` bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
```

2.  Instalar dependencias:

``` bash
npm install
```

3.  Configurar variables de entorno:

Crear un archivo `.env` en la raíz del proyecto con las siguientes
variables:

    VITE_API_KEY=xxxx
    VITE_AUTH_DOMAIN=xxxx
    VITE_PROJECT_ID=xxxx
    VITE_STORAGE_BUCKET=xxxx
    VITE_MESSAGING_SENDER_ID=xxxx
    VITE_APP_ID=xxxx

Los valores deben obtenerse desde Firebase Console.

4.  Ejecutar el proyecto:

``` bash
npm run dev
```

------------------------------------------------------------------------

## Estructura principal del proyecto

    src/
     ├── components/
     ├── context/
     ├── services/
     ├── App.jsx

------------------------------------------------------------------------

## Flujo de compra

1.  Navegar por el catálogo o por categorías.
2.  Ingresar al detalle de un producto.
3.  Seleccionar cantidad disponible.
4.  Agregar al carrito.
5.  Finalizar compra.
6.  Se genera un ID de orden y se limpia el carrito.

------------------------------------------------------------------------

## Deploy

El proyecto puede desplegarse en plataformas como:

-   Vercel
-   Netlify
-   Firebase Hosting

------------------------------------------------------------------------

## Capturas

Aquí se pueden agregar imágenes o GIF mostrando el funcionamiento de la
aplicación.
