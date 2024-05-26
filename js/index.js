// clases de productos
class Producto {
    constructor(nombre, precio, stock, imagen, descripcion) {
        //despues vemos para agregar la descripcion
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
// funciones

function renderizarProductos(productos) {
    contenedor.innerHTML=""; //para filtrar los productos y q al agregar una letra no se agreguen abajo, entonces te devuelve un array vacio


    for (const producto of productos) {
        const div = document.createElement("div");
        div.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top img-fluid imgProduc"
                        alt="${producto.nombre}"> 
                    <div class="card-body">
                        <h3 class="card-title nombreProduc">${producto.nombre}</h3>
                        <p class="card-text">${producto.descripcion}</p>
                        <h4 class="card-precio">$${producto.precio}</h4>
                        <h5>Stock: ${producto.stock}</h5>
                        <button type="button" class="animate__animated animate__bounce btnModal" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Añadir
                        </button>
                    </div>
    `;
        div.className="contenedorProducto"; //agregamos clase producto
        //agregamos el div al contenedor
        contenedor.append(div);
    }
}

function filtrarProductos(){
    const nombreProducto= inputNombreProducto.value;

    const productosFiltrados=productos.filter( (el) => {
        return el.nombre.toLowerCase().includes(nombreProducto.toLowerCase()); //tolowerCase para pasar todo a minuscula, para que al escribir un producto ya sea en min o may lo tome igual.
    });

    renderizarProductos(productosFiltrados);

}
// Evento para agregar al carrito al hacer clic en un botón
//   div.addEventListener('click', () => {
//     reservarProducto(producto);
//   });

// div.className="contenedorProductos"; ///???

// div.append(div); //agregamos

// contenedor.append(div); // el div lo agregamos al contenedor

// const h3=document.createElement("h3");
// h3.innerText=producto.nombre;

// const h4=document.createElement("h4");
// h4.innerText='Precio: $${producto.precio}';

// const h5=document.createElement("h5");
// h5.innerText='Stock: ${producto.stock}';

// //agrego los elementos al div
// div.append(h3,h4,h5);

// //agregamos div al contenedor de productos
// contenedor.append(div);

//array de los productos, inicio del programa
const contenedor = document.getElementById("contenedorProducto");

const inputNombreProducto = document.getElementById("nombreProducto");

const productos = [
    new Producto("Conjunto Deportivo", 7000, 5, "../img/art-11.png", "De microfibra, con corpiño regulador y colaless tiro alto."),
    new Producto("Conjunto Bra", 8000, 10, "../img/art-12.png", "De encaje, con corpiño y tanga regulable."),
    new Producto("Conjunto Push", 7500, 5, "../img/art-13.png", "De push up y arco con tanga."),
    new Producto("Conjunto tul", 7000, 15, "../img/art-14.png", "Sin relleno con corpiño y tanga regulables."),
    new Producto("Conjunto Depo", 7500, 5, "../img/art-15.png", "De microfibra,sin relleno con colales alta."),
    new Producto("Conjunto Basico", 7000, 10, "../img/art-16.png", "De encaje con corpiño y tanga regulable."),
    new Producto("Conjunto Sexy", 9000, 5, "../img/art-17.png", "De encaje con tanga regulable + arnes completo elastizable."),
    new Producto("Conjunto Up", 8000, 15, "../img/art-18.png", "Con push up y arco de encaje y tanga regulable."),
];

renderizarProductos(productos);

inputNombreProducto.addEventListener("input",filtrarProductos);

// const guardarProductoLS= (producto)=>{
//   localStorage.setItem("productos", JSON.stringify(productos));

// }
// const obtenerProductosLS= ()=>{
//   return JSON.parse(localStorage.getItem("productos")) || [];

// }

// const guardarCarritoLS= (productos)=>{
//   localStorage.setItem("carrito", JSON.stringify(productos));
// }

// const obtenerCarritoLS= ()=>{
//   return JSON.parse(localStorage.getItem("carrito")) || [];
// }

// const obtenerIdProductoLS= ()=>{
//   return JSON.parse(localStorage.getItem("carrito")) || 0;

// }

// const cantTotalProductos=()=>{
//   const carrito = obtenerCarritoLS();

//   return carrito.lenght;
// }

// const renderTotalcarrito= ()=>{
//   document.getElementById("totalcarrito").innerHTML= cantTotalProductos();
// }

// const verProducto = (id) =>{
//   localStorage.setItem("producto", JSON.stringify(id));

// }

// const obtenerProductoLS =()=>{
//   const productos = obtenerProductoLS();
//   const id = obtenerIdProductoLS();
//   const producto = productos.find(item =>item.id ===id);

//   return producto;
// }

// guardarProductosLS(productos);

// const productosReservados = []; //array vacio
