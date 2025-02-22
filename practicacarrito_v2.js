const carrito = document.getElementById("carrito");
const template = document.getElementById("template-carrito");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

document.addEventListener("click", (e) => {
  //   console.log(e.target.matches(".card .btn-outline-primary"));
  if (e.target.matches(".card .btn-outline-primary")) {
    agregarCarrito(e);
  }
  // console.log(e.target.matches(".list-group-item .btn-success"));
  if (e.target.matches("#carrito .list-group-item .btn-success")) {
    btnAumentar(e);
  }

  if (e.target.matches("#carrito .list-group-item .btn-danger")) {
    btnDisminuir(e);
  }
});

//creacion del objeto carrito
let carritoObject = [];

//funcion para agregar al carrito
const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: parseInt(1),
    precio: parseInt(e.target.dataset.precio),
  };

  // console.log(producto);

  const indice = carritoObject.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    carritoObject.push(producto);
  } else {
    carritoObject[indice].cantidad++;
    // carritoObject[indice].precio =
    // carritoObject[indice].cantidad * producto.precio;
  }

  console.log(carritoObject);

  //se agrega el producto al carrito
  //   carritoObject[producto.id] = producto;
  //se pinta
  pintarCarrito(producto);
};

//funcion para pintar el carrito
const pintarCarrito = (array) => {
  //se limpia el carrito
  carrito.innerHTML = "";

  //se recorre el objeto carrito y se pinta
  // Object.values(carritoObject).forEach((producto) => {
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

  //se agrega al carrito
  carrito.appendChild(fragment);
  pintarFooter();
};

const btnAumentar = (e) => {
  // console.log("intentas aumentar la fruta:", e.target.dataset.id);
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
  // console.log("pintarFooter");
  footer.textContent = "";
  const total = carritoObject.reduce(
    (acc, current) => acc + current.cantidad * current.precio,
    0
  );
  const clone = templateFooter.content.cloneNode(true);
  clone.querySelector("div span").textContent = total;

  footer.appendChild(clone);
};
