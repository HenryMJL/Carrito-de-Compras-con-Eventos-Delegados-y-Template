# 🛒 Carrito de Compras con Objeto, Template y Fragment

## 📚 Proyecto con Fines Educativos

Este proyecto es un ejemplo básico de un carrito de compras implementado en **JavaScript** utilizando:

- **Objetos** para gestionar los productos del carrito.
- **Templates** para renderizar dinámicamente el contenido en el DOM.

## 📂 Estructura del Proyecto

```
📦 carrito-de-compras
├── 📄 index.html
├── 📄 app.js
└── 📄 LICENSE
```

## 🧱 Template HTML

Este es el **template** utilizado para mostrar cada producto en el carrito:

```html
<template id="template-carrito">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="lead">Frutilla</span>
    <span class="badge bg-primary rounded-pill">12</span>
  </li>
</template>
```

## 📜 Código JavaScript Principal

```javascript
const carrito = document.getElementById("carrito");
const template = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll(".btn-outline-primary");

const carritoObj = {};

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObj.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObj[producto.id].cantidad + 1;
  }

  carritoObj[producto.id] = producto;
  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.innerHTML = "";

  Object.values(carritoObj).forEach((producto) => {
    const clone = template.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = producto.titulo;
    clone.querySelector(".badge").textContent = producto.cantidad;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btns.forEach((btn) => btn.addEventListener("click", agregarCarrito));
```

## 📌 ¿Cómo Funciona?

1. **Seleccionar elementos del DOM**: Se capturan el carrito, el template y los botones.
2. **Escuchar eventos**: Se agregan eventos `click` a cada botón.
3. **Actualizar el carrito**: 
   - Si el producto ya está en el carrito, se incrementa la cantidad.
   - Si no, se agrega como nuevo producto.
4. **Renderizar en el DOM**: Se clonan los elementos del `template` y se actualiza el carrito sin duplicar contenido.

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/HenryMJL/Carrito_Compra-Objeto-Template-Fragment-
   ```

2. Abre el archivo `index.html` en tu navegador.

## 📌 Requisitos

- Navegador con soporte de **JavaScript moderno**.

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

```
MIT License

Copyright (c) [2025] [Henry Jimenez]

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
 de este software y los archivos de documentación asociados (el "Software"), para
 utilizar el Software sin restricciones, incluyendo sin limitación los derechos
 de uso, copia, modificación, fusión, publicación, distribución, sublicencia y/o
 venta de copias del Software, y para permitir a las personas a quienes se les
 proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las
 copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
 IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD
 PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O
 TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA
 RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, AGRAVIO O CUALQUIER OTRA FORMA,
 DERIVADA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL
 SOFTWARE.
```

¡Diviértete aprendiendo! 🚀

