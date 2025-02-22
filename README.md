# 🛒 Carrito de Compras con Eventos Delegados y Template

## 📚 Descripción

Este proyecto es un ejemplo educativo de cómo implementar un carrito de compras dinámico utilizando **JavaScript puro (Vanilla JS)**. Se enfoca en el uso de:

- **Eventos delegados** para una mejor gestión de los eventos en el DOM.
- **Templates** para renderizar productos en el carrito de forma eficiente.
- **Manipulación de objetos y arrays** para almacenar y actualizar los productos del carrito.
- **Uso de fragmentos (`DocumentFragment`)** para mejorar la performance en la manipulación del DOM.

## 📂 Estructura del Proyecto

```
📦 carrito-de-compras
├── 📄 index.html
├── 📄 app.js
└── 📄 LICENSE
```

## 🧱 Template HTML

El siguiente **template** se utiliza para mostrar cada producto en el carrito de compras. Esto permite que el contenido se renderice dinámicamente sin necesidad de escribir HTML repetitivo en JavaScript.

```html
<template id="template-carrito">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="lead text-white">Producto</span>
    <span class="badge bg-primary rounded-pill">1</span>
    <div>
      <button class="btn btn-success btn-sm">+</button>
      <button class="btn btn-danger btn-sm">-</button>
      <span class="lead text-white">$<span>0</span></span>
    </div>
  </li>
</template>

<template id="templateFooter">
  <div class="d-flex justify-content-between">
    <h5>Total: $<span>0</span></h5>
  </div>
</template>
```

## 📜 Código JavaScript Principal

A continuación, se presenta el código de `app.js`, donde se manejan las funciones del carrito de compras.

```javascript
const carrito = document.getElementById("carrito");
const template = document.getElementById("template-carrito");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

document.addEventListener("click", (e) => {
  if (e.target.matches(".card .btn-outline-primary")) {
    agregarCarrito(e);
  }
  if (e.target.matches("#carrito .list-group-item .btn-success")) {
    btnAumentar(e);
  }
  if (e.target.matches("#carrito .list-group-item .btn-danger")) {
    btnDisminuir(e);
  }
});

let carritoObject = [];

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoObject.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    carritoObject.push(producto);
  } else {
    carritoObject[indice].cantidad++;
  }

  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.innerHTML = "";

  carritoObject.forEach((element) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".text-white .lead").textContent = element.id;
    clone.querySelector(".badge").textContent = element.cantidad;
    clone.querySelector("div .lead span").textContent =
      element.precio * element.cantidad;
    clone.querySelector(".btn-danger").dataset.id = element.id;
    clone.querySelector(".btn-success").dataset.id = element.id;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
  pintarFooter();
};

const btnAumentar = (e) => {
  carritoObject = carritoObject.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarrito();
};

const btnDisminuir = (e) => {
  carritoObject = carritoObject.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
      }
      if (item.cantidad === 0) {
        return;
      }
    } else {
      return item;
    }
    return item;
  });
  pintarCarrito();
};

const pintarFooter = () => {
  footer.textContent = "";
  const total = carritoObject.reduce(
    (acc, current) => acc + current.cantidad * current.precio,
    0
  );
  const clone = templateFooter.content.cloneNode(true);
  clone.querySelector("div span").textContent = total;
  footer.appendChild(clone);
};
```

## 🚀 Cómo Usar el Proyecto

Para utilizar este carrito de compras en un entorno local, sigue estos pasos:

### 1️⃣ Clonar el Repositorio

Ejecuta el siguiente comando en tu terminal para clonar el proyecto en tu máquina:

```bash
git clone https://github.com/HenryMJL/Carrito-de-Compras-con-Eventos-Delegados-y-Template
```

2. Abre el archivo `index.html` en tu navegador.

## 📌 Requisitos

- Navegador con soporte de **JavaScript moderno**.

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

```
MIT License

© [2025] Henry Jimenez

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
