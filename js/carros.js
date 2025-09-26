const autos = [
  {
    nombre: "Bugatti Bolide",
    descripcion: "Motor W16 de 8.0 litros y cuatro turbos de Bugatti, entrega 1850 CV para un rendimiento excepcional, logrando una velocidad máxima superior a los 500 km/h y una aceleración de 0 a 100 km/h en 2.17 segundos.",
    precio: "$120,000 USD",
    imagen:"../imagenes/bolide.jpg",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Ford Mustang GT500",
    descripcion: "motor V8 supercargado de 5.2 litros, capaz de generar 760 caballos de fuerza y un par motor de 625 lb-pie.",
    precio: "$105,000 USD",
    imagen: "../imagenes/mustang.jpg",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Chevrolet Camaro",
    descripcion: "Motor V8 6.2L que entrega 455 HP en versiones como la SS, y el ZL1 con un supercargador que eleva la potencia a 650 HP. ",
    precio: "$70,000 USD",
    imagen: "../imagenes/camaro.webp",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "BMW M6",
    descripcion: "V8 biturbo de 4.4 litros, con potencias que varían desde los 560 CV hasta los 635 CV.",
    precio: "$120,000 USD",
    imagen: "../imagenes/bmw.jpg",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "McLaren 720s",
    descripcion: "V8 biturbo de 4.0 litros, genera 720 PS y 770 Nm de par, con una aceleración de 0 a 100 km/h en 2.8 segundos y una velocidad máxima de 341 km/h",
    precio: "$5 MX",
    imagen: "../imagenes/Captura de pantalla 2025-09-26 114358.png",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Porsche Carrera 911",
    descripcion: "Motor turboalimentado de 3.0 litros con 385 HP y hasta 394 HP en la versión de mayor potencia, ofreciendo un rendimiento deportivo con aceleraciones rápidas y una velocidad máxima de 294 km/h. ",
    precio: "$122,095 USD",
    imagen: "../imagenes/porsche.avif",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Skyline R34",
    descripcion: "motor de 6 cilindros en línea con doble turbo de 2.6 litros era famoso por su potencia y su gran capacidad de modificación, pudiendo alcanzar más de 1000 caballos de fuerza con modificaciones.",
    precio: "$75,000 USD",
    imagen: "../imagenes/skyline.jpg",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Koenigsegg Agera",
    descripcion: "Motor V8 biturbo de 5 litros, la potencia varía según la versión, pero el Agera RS puede alcanzar los 1.360 CV con la mejora de 1MW. ",
    precio: "$1,330,000 USD",
    imagen: "../imagenes/agera.jpg",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Dodge Challenger Hellcat",
    descripcion: "Motor V8 Hemi de 6.2 litros supercargado, que genera una potencia de 717 caballos de fuerza y 656 lb-pie de torque, con un supercargador de 2.4 litros.",
    precio: "$70,000 USD",
    imagen: "../imagenes/hellcat.jpg",
    linkMP: "https://mpago.la/2wrFjKb"
  },
  {
    nombre: "Lamborghini Temerario",
    descripcion: "Motor V8 biturbo de 4.0 litros con tres motores eléctricos para una potencia total de 920 CV y una aceleración de 0 a 100 km/h en 2.7 segundos",
    precio: "$390,000 USD",
    imagen: "../imagenes/temerario.avif",
    linkMP: "https://mpago.la/2wrFjKb"
  }
];

const autosGrid = document.getElementById("autosGrid");
const detalle = document.getElementById("detalleAuto");
const volver = document.getElementById("volverBtn");

autos.forEach((auto, index) => {
  const card = document.createElement("div");
  card.className = "auto-card";
  card.innerHTML = `
    <img src="${auto.imagen}" alt="${auto.nombre}">
    <h3>${auto.nombre}</h3>
    <p>${auto.precio}</p>
    <div class="botones">
      <a href="${auto.linkMP}" target="_blank">
        <button>Comprar ahora</button>
      </a>
      <button onclick="mostrarAuto(${index})">Ver detalles</button>
      <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
    </div>
  `;
  autosGrid.appendChild(card);
});



function mostrarAuto(index) {
  const auto = autos[index];
  document.getElementById("detalleImg").src = auto.imagen;
  document.getElementById("detalleNombre").textContent = auto.nombre;
  document.getElementById("detalleDescripcion").textContent = auto.descripcion;
  document.getElementById("detallePrecio").textContent = auto.precio;

  document.querySelector(".galeria").style.display = "none";
  detalle.style.display = "flex";
  volver.style.display = "block";
}

function mostrarGaleria() {
  detalle.style.display = "none";
  volver.style.display = "none";
  document.querySelector(".galeria").style.display = "block";
}

// Manejar envío del formulario con simulación de confirmación
const compraForm = document.getElementById("compraForm");
compraForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("¡Felicidades, piloto!Acabas de encender el motor de una experiencia Dynamo Performance.Revisa tu correo para conocer todos los detalles de tu nueva máquina.");
  mostrarGaleria();
  compraForm.reset();
});








let carrito = [];

// Formatear precios
function parsePrecio(precio) {
  return Number(precio.replace(/[^0-9.-]+/g,""));
}

// Mostrar el carrito en pantalla
function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const total = document.getElementById("totalCarrito");
  lista.innerHTML = "";
  let totalCarrito = 0;

  carrito.forEach((item, index) => {
    totalCarrito += item.precio * item.cantidad;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.nombre} x${item.cantidad}</span>
      <div>
        <button onclick="incrementar(${index})">+</button>
        <button onclick="decrementar(${index})">-</button>
        <button onclick="eliminar(${index})">🗑</button>
      </div>
    `;
    lista.appendChild(li);
  });

  total.textContent = `$${totalCarrito.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  })} USD`;
}

function agregarAlCarrito(index) {
  const auto = autos[index];
  const precioNum = parsePrecio(auto.precio);
  const existente = carrito.find((item) => item.nombre === auto.nombre);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({
      nombre: auto.nombre,
      precio: precioNum,
      cantidad: 1,
    });
  }

  actualizarCarrito();
  document.getElementById("carrito").classList.add("abierto");
}

function incrementar(index) {
  carrito[index].cantidad++;
  actualizarCarrito();
}

function decrementar(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    carrito.splice(index, 1);
  }
  actualizarCarrito();
}

function eliminar(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Toggle carrito
document.getElementById("toggleCarrito").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("abierto");
});


