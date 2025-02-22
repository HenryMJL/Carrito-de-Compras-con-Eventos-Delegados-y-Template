const carrito = document.getElementById("carrito");
const template = document.getElementById("template-carrito");
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll(".btn-agregar");

//creacion del objeto carrito
const carritoObject = {};

//funcion para agregar al carrito
const agregarCarrito = (e) => {
  /** @type {*} */
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  //si el producto ya existe en el carrito, se le suma 1 a la cantidad
  if (carritoObject.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObject[producto.id].cantidad + 1;
  }
  //se agrega el producto al carrito
  carritoObject[producto.id] = producto;
  //se pinta
  pintarCarrito(producto);
};

//funcion para pintar el carrito
const pintarCarrito = (producto) => {
  //se limpia el carrito
  carrito.innerHTML = "";

  //se recorre el objeto carrito y se pinta
  Object.values(carritoObject).forEach((producto) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = producto.id;
    clone.querySelector(".badge").textContent = producto.cantidad;
    fragment.appendChild(clone);
  });

  //se agrega al carrito
  carrito.appendChild(fragment);
};

//se agrega el evento click a los botones
btns.forEach((btn) => btn.addEventListener("click", agregarCarrito));
