// clases de productos
class Producto{
    constructor(nombre, precio, stock){ //despues vemos para agregar la descripcion
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
}
// funciones
function reservarProducto(producto){
  //chequear si el producto esta reservado
  if(productosReservados.includes(producto.nombre)){


  }else{
    
  }

  console.log(producto); //ver si recibimos eso
}


function renderizarProductos(){
  const productos= obtenerProductoLS();
  let contenido= "";

  contenedor.innerHTML =""; //limpiar el contenedor

  for(const producto of productos){
    contenido += '<div class="col -md-4 text-center">
    <a href="producto.html" onclick= "verProducto(${pr"


    console.log(producto);

    const div=document.createElement("div");

// Evento para agregar al carrito al hacer clic en un botón
      div.addEventListener('click', () => {
        reservarProducto(producto);
      });




    div.className="contenedorProductos"; ///???

    div.append(div); //agregamos

    contenedor.append(div); // el div lo agregamos al contenedor

    const h3=document.createElement("h3");
    h3.innerText=producto.nombre;

    const h4=document.createElement("h4");
    h4.innerText='Precio: $${producto.precio}';

    const h5=document.createElement("h5");
    h5.innerText='Stock: ${producto.stock}';

    //agrego los elementos al div
    div.append(h3,h4,h5);

    //agregamos div al contenedor de productos
    contenedor.append(div);


  }
}

//array de los productos, inicio del programa
const contenedor= document.getElementById("contenedor"); // contenedor o producto?


const productos= [
    new Producto("Conjunto Deportivo",7000,5),
    new Producto("Conjunto Bra",8000,10),
    new Producto("Conjunto Push",7500,5),
    new Producto("Conjunto tul",7000,15),
    new Producto("Conjunto Depo",7500,5),
    new Producto("Conjunto Basico",7000,10),
    new Producto("Conjunto Sexy",9000,5),
    new Producto("Conjunto Up",8000,15),
];

const guardarProductoLS= (producto)=>{
  localStorage.setItem("productos", JSON.stringify(productos));

}
const obtenerProductosLS= ()=>{
  return JSON.parse(localStorage.getItem("productos")) || [];

}

const guardarCarritoLS= (productos)=>{
  localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS= ()=>{
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerIdProductoLS= ()=>{
  return JSON.parse(localStorage.getItem("carrito")) || 0;

}

const cantTotalProductos=()=>{
  const carrito = obtenerCarritoLS();

  return carrito.lenght;
}

const renderTotalcarrito= ()=>{
  document.getElementById("totalcarrito").innerHTML= cantTotalProductos();
}

const verProducto = (id) =>{
  localStorage.setItem("producto", JSON.stringify(id));

}

const obtenerProductoLS =()=>{
  const productos = obtenerProductoLS();
  const id = obtenerIdProductoLS();
  const producto = productos.find(item =>item.id ===id);

  return producto;
}

guardarProductosLS(productos);




const productosReservados = []; //array vacio

renderizarProductos(productos);