# Proyecto React + TypeScript + Vite + React-Query for BCNC

FRONTEND DEVELOPER TEST

---

## Descripción

**Enunciado de la prueba:**
- Realizar una SPA que, con los siguientes microfrontends, muestre la información:
  - Muestra la información de "users". [JSON Placeholder Users](https://jsonplaceholder.typicode.com/users)
  - Muestra la información de "albums". [JSON Placeholder Albums](https://jsonplaceholder.typicode.com/albums)
  - Muestra la información de "photos". [JSON Placeholder Photos](https://jsonplaceholder.typicode.com/photos)

- Realizar al menos un test unitario por funcionalidad.
- Hacer uso de Webpack o similar para la solución completa.
- Hacer uso de la caché por temas de rendimiento.
- El diseño queda a elección vuestra, también se valorará la creatividad y la fluidez.

Para abordar este reto, lo primero que se ha decidido es elegir un lenguaje de programación y un framework/librería para desarrollarlo. En esta ocasión, para realizar una Single Page Application, se ha optado por [React](https://es.react.dev/), ya que es la librería para JS/TS que más domino y con la que puedo aportar más conocimiento.

En segundo lugar, se ha elegido usar TypeScript para garantizar una mejor manejabilidad del código y evitar posibles errores.

Para la creación de nuestro proyecto, se ha utilizado [Vite](https://vitejs.dev/) en lugar de webpack, ya que una de las premisas del reto era el rendimiento y la eficiencia. Hemos intentado incorporarla en todas las partes del desarrollo, y Vite es más eficiente para módulos ECMAScript, las recargas en caliente son más rápidas y el tamaño del paquete en producción es mucho mejor.

---

## Estado del Proyecto

El proyecto actualmente proporciona la posibilidad de visualizar los tres listados mencionados anteriormente, como se pedía, además de poder filtrar los álbumes del usuario seleccionado. También se pueden visualizar las fotos del álbum seleccionado.

Se han creado test unitarios simples que comprueban la obtención de datos y la correcta visualización de ellos.

El proyecto se encuentra subido en GitHub y cuenta con CI para el despliegue en GitHub Pages para su uso: [Proyecto React BCNC](https://yeraydirod.github.io/)

---

## Tecnologías Utilizadas

Para cumplir con uno de los puntos más remarcados, que es el uso de caché para aumentar la eficiencia y/o el desarrollo orientado a la eficiencia, se ha incorporado [React-Query](https://www.npmjs.com/package/react-query). Simplifica la gestión de la lógica de datos en aplicaciones React al ofrecer un sistema de caché automático, manejo declarativo de estados de carga y errores, dando lugar a un mejor rendimiento de nuestra aplicación y proporcionando un sistema de caché robusta, eficiente y altamente extensible.

También se ha utilizado [Tailwind CSS](https://tailwindcss.com/) para una mejor lectura del código y un uso de CSS más rápido y sencillo, con clases ya definidas.

---

## Estructura de Carpetas

Puesto que uno de los puntos importantes era la separación en capas y que cada capa contenga únicamente su responsabilidad, el proyecto se ha estructurado siguiendo una aproximación de una Clean Architecture en Front, específicamente, una ESTRUCTURA HEXAGONAL.

Donde, por un lado, tendremos una carpeta MAIN (core), donde se encuentran las principales tres entidades del modelo de negocio. Cada una de ellas tiene una carpeta de Aplicación, lo que es consumible en la app, de DOMAIN, las definiciones de nuestra entidad, y de INFRASTRUCTURE, cómo obtener esos datos.

De esta manera, toda la lógica y definición de nuestro negocio está aislada de toda la parte UI de React. Además, propone una manera más sencilla de cambiar/migrar cualquier posible configuración en el futuro, como cambiar Axios por Fetch, React por Vue, o modificar la interfaz de una entidad.

Por otro lado, tenemos una carpeta UI donde se encuentran todos los componentes React de los que hace uso la aplicación, cada uno en su carpeta con sus correspondientes test unitarios.

Por último, en la carpeta Definiciones, tenemos un lugar donde tener definiciones globales. En este caso, cambiar /jsonplaceholder.typicode.com por una API supondría modificar una sola línea de código para todo el proyecto.

---

## Uso

Para utilizar la aplicación, en un Navbar superior, encontrarás tres botones, cada uno de ellos lleva a un listado de Cards donde cada una representa un elemento de la entidad seleccionada.

Del mismo modo, para los casos de Users y Albums, al seleccionar una de esas Cards, veremos los álbumes del usuario seleccionado o las fotos para el caso de seleccionar un álbum.

---

## Contacto

Yeray Díaz Rodríguez

[LinkedIn](https://www.linkedin.com/in/yeray-d%C3%ADaz/)
